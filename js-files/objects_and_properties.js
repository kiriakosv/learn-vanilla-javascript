// This file demonstrates how objects and properties work
var Tony = {
  firstName: 'Tony',
  lastName: 'Booh',
  address: {
    street: 'blah',
    city: 'Athens',
    state: 'ATH'
  }
}

function greet (person) {
  console.log('Hi' + person.firstName)
}

greet(Tony)
