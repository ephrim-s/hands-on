const path = require('path');

// console.log("Directory name: ", path.dirname(__filename));
// console.log(__filename);

const joinPath = path.join("/user", "documents", "node", "proejcts", 'jsfile.js');
// console.log("joined path", joinPath);

const resolvePath = path.resolve("user", "documents", "node", "proejcts", "jsfile.js");

console.log(resolvePath);
