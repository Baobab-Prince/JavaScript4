function Person(name, height, age) {
  this.name = name;
  this.height = height;
  this.age = age;
  this.updateAge = function () {
    return ++this.age;
  };
}

let person01 = new Person('Stevie Wonder', "6'0", '71');
let person02 = new Person('Dolly Parton', "5'0", '75');

console.log(person01);
//console.log(person02);
