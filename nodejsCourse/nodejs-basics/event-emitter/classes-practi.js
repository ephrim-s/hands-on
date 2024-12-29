class Rectangle {
  constructor(_width, _height, _color){
    console.log('good morning');
    this.width = _width;
    this.height = _height;
    this.color = _color;
  };

  getArea(){
    return this.width * this.height;
  };

  printDiscription(){
    console.log(`I am a rectangle of width: ${this.width}, height: ${this.height}, color: ${this.color}\nand has area of`, this.getArea());
  };
};

let rectangle = new Rectangle(4, 5, "green");
console.log(rectangle.printDiscription());