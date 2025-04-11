var fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
function printFruits(fruits) {
    for (var i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}
var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        console.log("Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    return Person;
}());
printFruits(fruits);
console.log(greet('John'));
var person1 = new Person('Alice', 30);
person1.introduce();
// npm install -g typescript
