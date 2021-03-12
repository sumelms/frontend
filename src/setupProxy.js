const { createProxyMiddleware } = require('http-proxy-middleware');

const auth_endpoint = process.env.AUTH_ENDPOINT || 'http://localhost:8080';

console.log(auth_endpoint);

module.exports = function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: auth_endpoint,
      changeOrigin: false,
    }),
  );
};
