const fruits: string[] = ['Apple', 'Banana', 'Cherry', 'Date'];

function printFruits(fruits: string[]): void {
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}

const greet = (name: string): string => {
    return `Hello, ${name}!`;
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

printFruits(fruits);
console.log(greet('John'));

const person1 = new Person('Alice', 30);
person1.introduce();

// npm install -g typescript
// tsc .\tsbasics.ts
//  node .\tsbasics.js