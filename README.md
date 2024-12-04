
Azure-SDK for JavaScriptの`@azure/storage-blob`をブラウザ向けにバンドルします。

### 参考

https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/Bundling.md

### 前提

- Docker環境が必要です

### 手順


```sh
docker build -t js-azure-storage-blob-bundle .
docker run --rm -it -v $PWD:/app js-azure-storage-blob-bundle bash ./build-rollup-ts.sh
```

`./dist/azure-storage-blob.js` が出来上がるので、ブラウザで読めるようにHTTPサーバへ配置します。
