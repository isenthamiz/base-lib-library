"use strict";

const Hapi = require("@hapi/hapi");
const routes = require("./routes/routes");
const hapiPino = require("./plugins/hapi-pino");
const goodFile = require("./plugins/good-file");

class Logger {
  constructor(config) {
    this.server = null;
    this.config = config;
  }

  async init() {
    this.server = Hapi.server({
      host: "localhost",
      port: this.config.logger.port || 4001,
      debug: false, // disable Hapi debug console logging
    });

    this.server.route(routes);
    await this.server.register(hapiPino);
    await this.server.register(goodFile);
    await this.server.start();

    return this.server;
  }
}

module.exports = Logger;
