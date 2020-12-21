const BaseServer = require("./base-lib/BaseServer");
const routes = require("./routes/routes");

const config = {
  server: {
    port: 3000,
  },
  logger: {
    port: 3001,
  },
};

const dependencies = {
  server: {
    routes: routes,
  },
};

class test extends BaseServer {
  constructor() {
    super(config, dependencies);
    this.start();
  }
}

const a = new test(config, dependencies);
