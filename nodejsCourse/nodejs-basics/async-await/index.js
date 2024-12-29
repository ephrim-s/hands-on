function delayFun(time){
  return new Promise((resolve) => setTimeout(resolve, time));
};

async function delayedGreet(name) {
  await delayFun(200);
  console.log(name);
};

delayedGreet("Samuel");

async function divisionFun(num1, num2) {
  try {
    if(num2 === 0) throw new Error('Cannot divide by zero');
    return num1/num2;
  } catch (error) {
    console.error('error', error);
    return null;
  }  
};

async function mainFn() {
  console.log(await divisionFun(10, 2));
  console.log(await divisionFun(10, 0));  
};

mainFn();