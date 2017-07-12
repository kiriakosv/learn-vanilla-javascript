function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked');

  // return { greet: 'I got in the way'};
}

Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
}

var john = new Person('john', 'doe');
var jane = new Person('jane', 'doe');
console.log(john);
console.log(jane);

String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}

console.log("John".isLengthGreaterThan(10));
