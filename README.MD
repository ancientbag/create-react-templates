### create-react-templates

This package lets you creating templates with CLI commands.

Using **strictly** with typescript  
May be used additionaly with following packages:

- jest
- testing-library/react
- testing-library/react-hook
- storybook

## Getting started

Install into your project  
`npm i @ancientbag/create-react-templates --save`  

Install globally  
`npm i @ancientbag/create-react-templates -g`

Use with npx  
`npx @ancientbag/create-react-templates ...`



Create `crt.config.js` in root directory. Specify **components** and **hooks** folders for output:

```javascript
module.exports = {
  output: {
    components: "./src/components",
    hooks: "./src/hooks",
  },
};
```

Use`create-react-templates` providing next flags:

| isRequired | prop | type                      |
| :--------- | :--- | :------------------------ |
| **true**   | type | string: `component / hook` |
| **true**   | name | string                    |

##### Example:

`create-react-templates --type=component --name=MyComponent`

### ToDo

- Configurable templates
- CLI interactive menu
- Beautify CLI output
