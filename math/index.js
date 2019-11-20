const { euclideanAlgorithm, euclideanAlgorithmRecursive } = require('./euclidean');
const { factorial, factorialRecursive } = require('./factorial');
const fastPowering = require('./fastPowering'); 

console.log('start math -------');

const originalA = 1071;
const originalB = 462;

const gcd1 = euclideanAlgorithm(originalA, originalB);
const gcd2 = euclideanAlgorithmRecursive(originalA, originalB);

console.log(`Euclidean algorithm ${originalA} ${originalB} ea=${gcd1} ear=${gcd2}`);

const number = 4;

const f1 = factorial(number);
const f2 = factorialRecursive(number);

console.log(`Factorial ${number} factorial=${f1} factorialRecursive=${f2}`);

const base = 2;
const power = 8;

const res = fastPowering(base, power);

console.log(`Fast Powering base=${base} power=${power} res=${res}`);

console.log('end math --------');

module.exports = () => console.log('math is done');
