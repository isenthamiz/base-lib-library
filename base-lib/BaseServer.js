"use strict";

const HapiServer = require("./server/server");
const Logger = require("./logger/logger");
const { dependencies } = require("hapi-pino");

class BaseServer {
  constructor(config, dependencies) {
    this.server = new HapiServer(config, dependencies);
    this.logger = new Logger(config);
  }

  async start() {
    await this.server.init();
    await this.logger.init();
  }
}

module.exports = BaseServer;
