class polygon{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return (this.width * this.height)
    } 

    toString(x){
        console.log(`The Area of ${x} =  ${this.area()}`)
    }

}

class Rectangle extends polygon{ 
    Name = "Rectangle"
    constructor(width, height) {
        super(width, height); 
      }
    toString(x){
        super.toString()
        console.log(`width = ${this.width}, height = ${this.height}`)
    }   
    }

var rect = new Rectangle(20,10)
rect.toString(rect.Name)


class Square extends polygon{
    Name = "Square"
    constructor(len) {
        super(len, len);
    }
    toString(x){
        super.toString()
        console.log(`width = ${this.width}, height = ${this.height}`)
    }   
    }

var sqr = new Square(10)
sqr.toString(sqr.Name)


class Circle extends polygon{
    Name = "Circle"
    constructor(radius) {
        super(radius, radius);
    }

    area() {
        return Math.round(Math.PI * super.area())
    }

    toString(x){
        super.toString()
        console.log(`radius = ${this.width}`)
    }   
}

var circ = new Circle(5)
circ.toString(circ.Name)


class Triangle extends polygon{
    Name = "Triangle"
    constructor(base, height) {
        super(base, height);
    }

    area() {
        return Math.round(0.5 * super.area())
    }
    toString(x){
        super.toString()
        console.log(`base = ${this.width}, height = ${this.height}`)
    }   
}

var tri = new Triangle(5,10)
tri.toString(tri.Name)