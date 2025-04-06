
let words = ["apple", "Orange", "banana", "Grape"];
words.sort();
console.log(words); 


let nums = [3, 1, 4, 2,10,20, 5];

// lexico order
nums.sort();
console.log(nums);

// how it works
nums.sort(function(a, b) {
    return a - b;
});
 /*
The compareFunction should return:
A negative value if a should come before b.
A positive value if a should come after b.
Zero if a and b are considered equal (no change in their order).
 */


nums.sort((a, b) => a - b);  // Ascending order
console.log(nums);  // Output: [1, 2, 3, 4, 5]

nums.sort((a, b) => b - a);  // Descending order
console.log(nums);  // Output: [5, 4, 3, 2, 1]

// mapp applies a func to all


let nums2 = [1, 2, 3, 4];
let doubled = nums2.map(x => x * 2);
console.log(doubled);

// filtering 
let nums3 = [1, 2, 3, 4, 5, 6];
let evenNumbers = nums3.filter(x => x % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4, 6]

// Map structure 
let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(map.get('b'));  // Output: 2
console.log(map.has('a'));  // Output: true
map.delete('a');
console.log(map.has('a'));  // Output: false


let nums5 = [1, 2, 2, 3, 4, 4, 5];
let uniqueNums = new Set(nums5);
console.log(uniqueNums);  // Output: Set {1, 2, 3, 4, 5}


// go through all elemnt 
let nums6 = [1, 2, 3, 4];
let sum = nums6.reduce((acc, curr) => acc + curr, 0);
let mult= nums6.reduce((acc, curr) => acc * curr, 0);

console.log(sum);  // Output: 10
console.log(mult);

let numbers = [1, 2, 3, 4, 5];
let product = 1;  // Start with 1 (since multiplying by 0 will always be 0)

// Using a for loop to iterate over the array
for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];  // Multiply the current element with the accumulator
}

console.log(product);  // Output: 120 (1 * 2 * 3 * 4 * 5)

