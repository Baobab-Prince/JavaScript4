class Baby {
  setName(name) {
    this.name = name;
  }

  startSinging() {
    console.log('Mommy started singing to ' + this.name + '.' + '🙂');
  }

  stopSinging() {
    console.log('Mommy stopped singing to ' + this.name + '.' + '😳');
  }
}

class Infant extends Baby {
  loudCry(cry) {
    console.log('Response from ' + this.name + ' is, ' + cry);
  }
}

let myBaby = new Infant();
myBaby.setName('Alex');
myBaby.startSinging();
myBaby.stopSinging();
myBaby.loudCry('"Wahhh, wahhh!!!"' + '😭');
