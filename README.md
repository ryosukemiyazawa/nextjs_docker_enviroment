NextJS 開発環境
================================

## 準備

```
$ docker-compose build
$ docker-compose run --rm app sh -c "npx create-next-app . --typescript"
$ docker-compose run --rm app sh -c "npm run build"
$ docker-compose up
```

http://localhost:3000/
を開いて動作確認

終了する時は「CTRL+C」で中断

## サンプル

https://ryosukemiyazawa.github.io/react_docker_envriroment/