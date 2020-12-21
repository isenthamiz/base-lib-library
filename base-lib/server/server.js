"use strict";

const Hapi = require("@hapi/hapi");

class HapiServer {
  constructor(config, dependencies) {
    this.hapiserver = null;
    this.config = config;
    this.dependencies = dependencies;
  }
  async init() {
    this.hapiserver = Hapi.server({
      port: this.config.server.port || 4000,
      host: "localhost",
    });

    this.hapiserver.route(this.dependencies.server.routes);

    await this.hapiserver.start();
    console.log("Server running on %s", this.hapiserver.info.uri);
  }
}

module.exports = HapiServer;
