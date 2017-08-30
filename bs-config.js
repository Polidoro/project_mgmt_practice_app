const proxyMiddleware = require('http-proxy-middleware');
const proxyURL = 'http://localhost:9867';

module.exports = {
    ghostMode: false,
    server: {
        middleware: [proxyMiddleware('/api', { target: proxyURL })]
    }
};