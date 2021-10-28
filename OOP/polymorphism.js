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
  //   eats() {
  //     console.log(this.name + ' eats bamboo');
  //   }
}

let buttercup = new Panda('Buttercup');
buttercup.eats();
