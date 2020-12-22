const routesHandler = require("../handler/routesHandler");

module.exports = {
  method: "GET",
  path: "/",
  handler: routesHandler.rootHandler,
};
