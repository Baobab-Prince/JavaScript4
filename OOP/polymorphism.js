/*To call the parent class method -- super.eats(); under eats function)*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    console.log(this.name + ' eats food');
  }
}

class Panda extends Animal {
  //two classes have the same function (eats) parent v child
  eats() {
    console.log(this.name + ' eats bamboo');
  }
}

//create object for child class
let buttercup = new Panda('Buttercup');
buttercup.eats();
