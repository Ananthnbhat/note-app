const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(proxy(["/api", '/auth/google'], { target: 'http://localhost:5000' }));
    app.use('/api', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
}