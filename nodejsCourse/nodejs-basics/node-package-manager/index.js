const lodash = require('lodash');

const names = ['samuel', 'james', 'john', 'alx'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);