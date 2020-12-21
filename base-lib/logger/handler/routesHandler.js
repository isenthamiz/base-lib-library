const getRootHandler = async (request, h) => {
  // request.log is HAPI standard way of logging
  // request.log(["a", "b"], "Request into hello world");

  // // you can also use a pino instance, which will be faster
  // request.logger.info("In handler %s", request.path);
  request.server.log("Hello World");
  request.server.log("Message: Senthamiz Kumaran");
  return "hello world";
};

const loggerHandler = async (request, h) => {
  const payload = request.payload;
  request.server.log(payload);
  return "ok";
};

module.exports = {
  getRootHandler,
  loggerHandler,
};
