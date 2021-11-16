function Employee(name, age, baseSalary) {
  this.name = name;
  this.age = age;
  this.baseSalary = baseSalary;
  this.monthlyBonus = 500; //This should not be exposed...needs to be internal/private
  let monthlyBonus = 500; //This variable is out of scope now

  //this.calculateFinalSalary = function () {
  let calculateFinalSalary = function () {
    //The user should not be able to see this part of the function.
    let finalSalary = baseSalary + monthlyBonus; //remove ".this"
    console.log('Final Salary is : ' + finalSalary);
  };

  this.getEmpDetails = function () {
    console.log('Name : ' + this.name + '| Age :' + this.age);
    calculateFinalSalary();
  };
}

let emp1 = new Employee('Andre', 40, 1000);
console.log(emp1);
