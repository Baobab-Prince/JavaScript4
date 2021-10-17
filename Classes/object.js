//constructor functions contructs/creaates an object

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}
let userOne = new User('wolverine@marvel.com', 'wolverine');
let userTwo = new User('sabertooth@marvel.com', 'sabertooth');

console.log(userOne);
console.log(userTwo);
//node object.js to run

//the "new" keyword
// - creates a new empty object{}
// - sets the value of "this" to be the new empty object
// - calls the constructor method
