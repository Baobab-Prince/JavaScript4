class Student {
  setStudentDetails(name, id, phoneNo) {
    this.name = name;
    this.id = id;
    this.phoneNo = phoneNo;
  }
  getStudentName() {
    return this.name;
  }
  getStudentId() {
    return this.id;
  }
  getStudentPhoneNo() {
    return this.phoneNo;
  }
}

let kid = new Student();

kid.setStudentDetails('Wayne', 1717, 5045552222);
console.log(kid.getStudentName());
console.log(kid.getStudentId());
console.log(kid.getStudentPhoneNo());
