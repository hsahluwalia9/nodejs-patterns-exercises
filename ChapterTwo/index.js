// Callbacks synchronous style

console.log('Synchronous operation ...');
function addAndPrintResult(a, b, callback) {
    callback(a+b);
}

console.log('before');
addAndPrintResult(1, 2, result => console.log(result));
console.log('after');

// Callbacks asynchronous style

console.log('asynchronous operation ...');
function additionAsync(a, b, callback) {
    setTimeout(() => callback(a+b), 500);
}

console.log('before');
additionAsync(1, 2, result => console.log(result));
console.log('after');