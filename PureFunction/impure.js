//Pure functions always return something--if it does not then its impure
function add(a, b) {
  const total = a + b;
  console.log(total);
}

//NO SIDE EFFECTS!!!
const z = 5;
const sum = (x, y) => x + y + z;
console.log(sum(2, 2));

//Impure functions cannot modify the DOM
//🚫 Accessing APIs, databases, storage, or file systems
//They arent bad --just harder to test & debug

//No data should be mutated

let y = 5;
const increment = () => (y += 2);
console.log(increment());
console.log(y);
