
Azure-SDK for JavaScriptの`@azure/storage-blob`の`BlockBlobClient`をブラウザ向けにバンドルします。

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



### ES版が欲しい場合

UMDでバンドリングしているので、`import("./file.js")`などのES Moduleとして読み込みたい場合はESとしてバンドリングする必要があります。

rollup.config.jsを以下のように修正するとESでビルドされます。(`format`のデフォルトは`es`)

```diff
-      format: "umd",
-      name: 'globalThis',
-      extend: true,
```

### コード概要

- `azure-storage-blob.ts`
  - Azure-SDK for JavaScriptの `BlockBlobClient` を使うためのエントリポイント
- `azure-storage-blob.polyfill.ts`
  - WebWorkerではDOMParser, XMLSerializer, document.implementationが使えないため`@xmldom/xmldom`で代用するためのエントリポイント
  - ES版ではグローバルスコープを変更しないので、グローバルスコープにDOMParser等が見えるようにひと手間必要かもしれない。