import { User } from './object.js';

let userOne = new User('wolverine@marvel.com', 'wolverine');
let userTwo = new User('sabertooth@marvel.com', 'sabertooth');

userOne.login();
userTwo.logout();
