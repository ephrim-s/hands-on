const firstModule = require('./first-module');

try {
  console.log("tryint to divide by zero");
  let result = firstModule.divide(0, 0);
  console.log(result, "result");
} catch (error) {
  console.log("caught and error", error.message);
}