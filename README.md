NextJS 開発環境
================================

## 準備

docker-compose.ymlがある階層で下記コマンドを実行

```
$ ./create_env.sh
$ docker-compose build
$ docker-compose run --rm app sh -c "npx create-next-app . --typescript"
 => 確認を求められるので「y」を入力
$ docker-compose run --rm app sh -c "npm run build"
$ docker-compose up
```

http://localhost:3000/
を開いて動作確認

終了する時は「CTRL+C」で中断

## 起動する時

docker-compose.ymlがある階層で下記コマンドを実行

$ docker-compose up

## サンプル

https://ryosukemiyazawa.github.io/react_docker_envriroment/