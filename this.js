const Person = {
    name: "Shaheb Ali",
    greet: function (message) {
        const innerFn = (msg) => {
            console.log(msg + ", how are you " + this.name);
        };
        innerFn(message);
    },
};
const anotherPerson = { name: "Shahid Islam" };

Person.greet(anotherPerson, "hello");
