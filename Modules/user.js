class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printName() {
    console.log(`User's name is ${this.name}`);
  }
  printAge() {
    console.log(`User is ${this.age} years old`);
  }
}

export default User;
