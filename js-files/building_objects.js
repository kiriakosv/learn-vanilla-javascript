function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked');

  // return { greet: 'I got in the way'};
}

var john = new Person('john', 'doe');
var jane = new Person('jane', 'doe');
console.log(john);
console.log(jane);