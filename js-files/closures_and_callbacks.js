function sayHiLater() {
  var greeting = "Hi";

  setTimeout(function() {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

// Still, execution stack must be empty for the callback to run
// // var i = 1;
// // while (i < 100) {
// //   console.log("hlkadf");
// //   i += 1;
// }

// jQuery uses function expressions and first-class functions!
// $("button").click(function() {
  
// });

function tellMeWhenDone(callback) {
  var a = 1000;
  var b = 2000;

  callback();
}

tellMeWhenDone(function() {
  console.log("I am done!");
})

tellMeWhenDone(function() {
  console.log("All done...");
})