const fs = require('fs');
const path = require('path');

/*
const dataFolder = path.join(__dirname, "data/example.txt");

if(!fs.existsSync(dataFolder)){
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}
const filePath = path.join(dataFolder, 'example.txt');
// fs.writeFileSync(filePath, "tesiting to write files in js");
fs.appendFileSync(filePath, "\nThis is a new linetesiting to write files in js");
console.log("file writing successful");

const readContentFromFile = fs.readFileSync(dataFolder, "utf-8");
console.log(readContentFromFile);
*/

// const fileRead = path.join(__dirname, 'data/example.txt');
// fs.appendFileSync(fileRead, "\nThis is a new line");
// const readContentFromFile = fs.readFileSync(fileRead, "utf-8");
// console.log(readContentFromFile);

//async Way of writing file

const asyncFilePath = path.join(__dirname, 'data/async-file-example.txt');

fs.writeFile(asyncFilePath, 'Hello async node js', (err) => {
  if (err) throw err;
  console.log('Async file is created successfully');
});
  
fs.appendFile(asyncFilePath, "\nThis is a new line", (err,)=>{
  if (err) throw err;
  console.log("appended successfully");
});
    
  fs.readFile(asyncFilePath, 'utf-8', (err, data)=>{
  if (err) throw err;
  console.log(data);
});