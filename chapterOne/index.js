/**
 * Chapter 1
 * 
 *  */ 

const numbers = [1, 2, 4, 3, 8, 1, 2];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('even numbers: ' + evenNumbers);

const x = 2;
const y = 1
const obj = { x, y };
console.log(obj);

const [one, two, three, ...rest] = numbers;
console.log(rest);