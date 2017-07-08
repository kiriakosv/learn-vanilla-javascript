function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      function() {
        console.log(i);
      }
    )
  }
  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {
  var arr = [];
  var name = 5

  for (var i = 0; i < 3; i++) {
    // let j = i;  // ES6
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )
  }
  return arr;
}

var fs2 = buildFunctions2();
var name = 4;
fs2[0]();
fs2[1]();
fs2[2]();

if (a === 3) {

};