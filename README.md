
Azure-SDK for JavaScriptの`@azure/storage-blob`をブラウザ向けにバンドルします。

### 参考

https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/Bundling.md

### 前提

- Docker環境が必要です

### 手順


```sh
docker build -t node-22 .
docker run --rm -it -v $PWD:/app node-22 bash ./build-rollup-ts.sh
```

`./dist/azure-storage-blob.js` が出来上がるので、ブラウザで読めるようにHTTPサーバへ配置します。
