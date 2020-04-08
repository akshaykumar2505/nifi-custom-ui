const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "localhost:3000",
    proxy({
      target: "localhost:8080/nifi-api/flow/process-groups/09e72e00-0170-1000-3ecf-e55bf50939e8",
      changeOrigin: true
    })
  );
};