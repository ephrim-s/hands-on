const eventEmitter = require('events');

class MyCustomEmitter extends eventEmitter{
  constructor(){
    super();
    this.greeting = 'hello';
  }

  greet(name){
    this.emit('greeting', `${this.greeting}, ${name}`);
  }
};

const myCustomEmitter = new MyCustomEmitter();
myCustomEmitter.on('greeting', (input)=>{
  console.log(`Greeting event`, input);
});
myCustomEmitter.greet('samuel');