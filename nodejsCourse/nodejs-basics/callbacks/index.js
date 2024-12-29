const fs = require('fs');

// function person(name, callbackFn){
//   console.log(`hello ${name}`)
//   callbackFn();
// }

// function address(){
//   console.log("Ghana");
// }

fs.readFile('input.txt', "utf-8", (err, data)=>{
  if(err){
    console.error('Error reading file', err);
    return;
  } 
  
  console.log(data);
});