//constructor functions contructs/creaates an object

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, 'just logged in');
  }
  logout() {
    console.log(this.email, 'just logged out');
  }
}
let userOne = new User('wolverine@marvel.com', 'wolverine');
let userTwo = new User('sabertooth@marvel.com', 'sabertooth');

userOne.login();
userTwo.logout();

//console.log(userOne);  UNCOMMENT THIS TO SHOW EMAIL AND NAME ONLY
//console.log(userTwo);    "         "   "   "   "     "     "   "

//****DIRECTIONS***** */
//Use node object.js to run

//the "new" keyword
// - creates a new empty object{}
// - sets the value of "this" to be the new empty object
// - calls the constructor method
