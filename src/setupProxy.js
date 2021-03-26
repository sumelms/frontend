const { createProxyMiddleware } = require('http-proxy-middleware');

const authEndpoint = process.env.AUTH_ENDPOINT || 'http://localhost:8080';

module.exports = function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: authEndpoint,
      changeOrigin: false,
    }),
  );
};
