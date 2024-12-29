function delayFun(time){
  return new Promise((resolve)=> setTimeout(resolve, time));
};

console.log("promise lecturestart")
delayFun(200)
.then(()=> console.log("after 2 seconds promise resolved"));
console.log("end")


function divideFn(num1, num2){
  return new Promise((resolve, reject) => { 
  if(num2 === 0){
    reject('cannot perform division by zero or 0');
  } else {
    resolve(num1/num2);
  }
  });
}

divideFn(10, 0)
.then(result=> console.log(result))
.catch(error=> console.log(error, 'err'));