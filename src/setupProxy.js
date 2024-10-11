const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://ben-slotsrv2.depapi.xyz',
            changeOrigin: true,
        })
    );
};
