# webpack-101
A simple example of using Webpack with React JS and ES6

## Project structure

```shell
root
 |- dist/           // bundles will be built and copied into this directory for distribution
 |
 |- src/
 |  |- assets/      // image directory
 |  |
 |  |- components/  // reusable components (modules) directory
 |  |
 |  |- entry1.html  // html for entry point 1
 |  |- entry1.js    // entry point 1
 |  |- entry2.html  // html for entry point 2
 |  |- entry2.js    // entry point 2
 |
 |- styles/
 |  |- base.less    // base styles for all entry points
 |  |- mixins.less  // less mixins 
 |  |- variable.less // color variables
```

## Development Workflow
```shell
# To install dependencies
npm install

# To build bundles for distribution
npm run build
```

To run local server for testing
```
npm run dev
```
After running local server,

For entry point 1, go to [http://localhost:8080/webpack-dev-server/entry1.html](http://localhost:8080/webpack-dev-server/entry1.html)

For entry point 2, Go to [http://localhost:8080/webpack-dev-server/entry2.html](http://localhost:8080/webpack-dev-server/entry2.html)