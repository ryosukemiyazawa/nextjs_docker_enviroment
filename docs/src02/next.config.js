/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	webpack: (config) => {
		config.watchOptions = {
			aggregateTimeout: 200,
			poll: 1000,
			ignored: /node_modules/,
		};

		return config;
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
