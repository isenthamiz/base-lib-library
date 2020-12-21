const routsHandler = require("../handler/routesHandler");
module.exports = [
  {
    method: "GET",
    path: "/",
    handler: routsHandler.getRootHandler,
  },
  {
    method: "POST",
    path: "/logger",
    handler: routsHandler.loggerHandler,
  },
];
