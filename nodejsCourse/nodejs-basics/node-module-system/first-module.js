const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const divide = (a, b) => {
  if(b === 0){
    throw new Error('Divide by zero is not allowed');    
  }
  return a / b;
};

module.exports = {add, subtract, divide};