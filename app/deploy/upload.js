const fs = require("fs");
const path = require("path");
const mimetypes = require("@katsube/mimetypesjs");

async function uploadNextJS() {
	// include dot env file
	require("dotenv").config();

	// エクスポートするディレクトリ
	const deployTarget = "/app/src/out";

	// Load the AWS SDK for Node.js
	var AWS = require("aws-sdk");
	const { exit } = require("process");
	// Set the region
	AWS.config.update({
		credentials: new AWS.Credentials(
			process.env["AWS_KEY"],
			process.env["AWS_SECRET"]
		),
		region: "ap-northeast-1",
	});

	// Create S3 service object
	const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

	const deployPath = process.env["DEPLOY_PATH"];
	if (!deployPath) {
		exit;
	}

	//アップロードするファイルをリストアップする
	const files = await listFiles(deployTarget, deployPath);

	for (const item of files) {
		const params = {
			Bucket: "dcbee-study",
			Key: item[0].replace(/^\//, ""),
			Body: fs.createReadStream(item[1]),
			ContentType: item[2],
		};
		const uploadRet = await s3.upload(params).promise();
		if (uploadRet) {
			console.log("upload: " + item[0]);
		}
	}
}

async function listFiles(target, base = "") {
	let ret = [];
	const files = fs.readdirSync(target);

	for (let file of files) {
		const key = base + "/" + file;
		const filepath = path.join(target, file);

		if (fs.lstatSync(filepath).isDirectory()) {
			const subfiles = await listFiles(filepath, key);
			ret = ret.concat(subfiles);
		} else {
			ret.push([key, filepath, mimetypes.get(filepath)]);
		}
	}

	return ret;
}

uploadNextJS().then(() => {
	console.log("finish");
});
