class shape {
    area() {
        return 0;
    }
}

class circle extends shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const newCircle = new circle(5);
console.log(newCircle.area());
