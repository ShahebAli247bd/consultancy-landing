function Person() {
    this.name = "Shaheb Ali";
    this.age = 38;
    this.greet = () => {
        console.log(`Hello ${this.name}`);
    };
}

Person.prototype.sayHello = function () {
    this.greet();
};

const p = new Person();

p.sayHello();
