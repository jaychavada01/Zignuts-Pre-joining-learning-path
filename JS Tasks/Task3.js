/*  Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class. */

class Shape {
    constructor(name) {
        this.name = name;
    }
    calculateArea() {
        throw new Error("This method will be overridden by subclasses");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super("Triangle");
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

const circle = new Circle(5);
console.log(`The area of the circle is: ${circle.calculateArea().toFixed(2)}`);

const triangle = new Triangle(10, 6);
console.log(`The area of the triangle is: ${triangle.calculateArea()}`);