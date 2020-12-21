module.exports = {
  plugin: require("good"),
  options: {
    reporters: {
      file: [
        {
          module: "good-squeeze",
          name: "Squeeze",
          args: [
            {
              log: "*",
              response: "*",
            },
          ],
        },
        {
          module: "good-squeeze",
          name: "SafeJson",
        },
        {
          module: "good-file",
          args: ["./logs/server_log"],
        },
      ],
    },
  },
};
