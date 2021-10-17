import User, { printName as printUserName, printAge } from '/user.js';

const user = new User('Tupac', 50);
console.log(user);
printUserName(user);
printAge(user);
