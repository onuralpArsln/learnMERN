function normalFunction(a, b) {
    return a + b;
}

const arrowFunction = (a, b) => a + b;


const checkNumber = (num) => {
    if (num > 0) {
        return `${num} pozitif.`;
    } else if (num < 0) {
        return `${num} negatif`;
    } else {
        return 'Sıfırdır.';
    }
};

console.log(checkNumber(10));  
console.log(checkNumber(-5));   
console.log(checkNumber(0));  
