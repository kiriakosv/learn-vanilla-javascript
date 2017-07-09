// Function statement
function greet (name) {
  console.log('Hello ' + name)
};
greet('John')

// Function expression
var greetFunc = function (name) {
  console.log('Hello ' + name)
}
greetFunc('John')

// Immediately invoked function expression
var greeting = (function (name) {
  return 'Hello ' + name
}('John'))

console.log(greeting)

;(function (name) {
  var greeting = 'Hello '
  console.log(greeting + name)
}('John')) // IIFE
