greet();

// Function Statement
function greet() {
  console.log("Hi");
}

// Function Expression
var anonymousGreet = function() {
  console.log("Hi");
}

anonymousGreet();

function log(a) {
  console.log(a);
  a();
}

log(function() {
  console.log("hi");
});