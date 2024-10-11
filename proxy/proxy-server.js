const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// 設定代理，將請求轉發到目標伺服器
app.use("/api", createProxyMiddleware({ target: "http://ben-slotsrv2.depapi.xyz/api", changeOrigin: true }));

// 啟動本地伺服器，監聽端口
const port = 6001;
app.listen(port, () => {
    console.log(`Proxy server is running at http://localhost:${port}`);
});
