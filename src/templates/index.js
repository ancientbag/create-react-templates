const { generateTemplateFilesCommandLine } = require("generate-template-files");

generateTemplateFilesCommandLine([
  {
    option: "Create Component",
    defaultCase: "(pascalCase)",
    entry: {
      folderPath: `${__dirname}/component`,
    },
    stringReplacers: ["TemplateName"],
    output: {
      path: `src/components/TemplateName(pascalCase)`,
      pathAndFileNameDefaultCase: "(pascalCase)",
      overwrite: true,
    },
  },
  {
    option: "Create Hook",
    entry: {
      folderPath: `${__dirname}/hook`,
    },
    stringReplacers: ["TemplateName", "TypeName"],
    output: {
      path: "src/hooks/useTemplateName(pascalCase)",
      pathAndFileNameDefaultCase: "(camelCase)",
      overwrite: true,
    },
  },
]);
