const { cosmiconfig } = require("cosmiconfig");

export function cli() {
  const explorer = cosmiconfig("crt");

  explorer
    .search()
    .then((result) => {
      let config = {};

      if (result.config) {
        config = result.config;
      } else if (result.isEmpty) {
        config = {
          output: {
            components: "./src/components",
            hooks: "./src/hooks",
          },
        };
      }

      const optionDefinitions = [
        { name: "type", defaultOption: true, type: String },
        { name: "name", type: String },
      ];
      const commandLineArgs = require("command-line-args");
      const options = commandLineArgs(optionDefinitions);

      const { exec } = require("child_process");

      switch (options.type) {
        case "component": {
          if (!options.name) {
            return console.error("ERROR: ` You need to specify name");
          }
          exec(
            `node ${__dirname}/templates/index.js create-component TemplateName=${options.name} --outputpath=${config.output.components}/${options.name}`,

            (error, stdout, stderr) => {
              if (error) {
                console.log(`error: ${error.message}`);
                return;
              }
              if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
              }
              console.log(`stdout: ${stdout}`);
            }
          );
          return;
        }
        case "hook": {
          if (!options.name) {
            return console.error("ERROR: ` You need to specify name");
          }
          exec(
            `node ${__dirname}/templates/index.js create-hook TemplateName=${
              options.name
            } TypeName=${options.name
              .split("")
              .map((item, index) => {
                if (index === 0) {
                  return String(item).toUpperCase();
                }
                return item;
              })
              .join("")} --outputpath=${config.output.hooks}`,

            (error, stdout, stderr) => {
              if (error) {
                console.log(`error: ${error.message}`);
                return;
              }
              if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
              }
              console.log(`stdout: ${stdout}`);
            }
          );
          return;
        }
        default: {
          return console.error("ERROR: ~ You need to specify type");
        }
      }
    })
    .catch((error) => {
      console.error("ERROR: Unnable to find 'crt.config.js'");
    });
}
