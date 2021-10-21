/*Pure functions

-Independent, easy to debug, clean code, and easy to test
-The same input always returns the same output.
-No side effects
*/

function add(a, b) {
  const total = a + b;
  return total;
}
console.log(add(5, 5));

//Two arguments first/last
const fullName = (first, last) => `${first} ${last}`;
console.log(fullName('Kendrick', 'Lamar'));

//Math functions
const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddToTen = oneToTen.filter((elem) => elem % 2 !== 0);
console.log(oddToTen);

const doubled = oneToTen.map((elem) => elem * 2);
console.log(doubled);

const summed = oneToTen.reduce((acc, elem) => acc + elem);
console.log(summed);

console.log(oneToTen);
