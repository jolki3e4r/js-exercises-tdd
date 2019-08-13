let suma = 0;
function addNumbers(numbers) {
  for (i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  return suma;
}
module.exports = addNumbers;

// refactorizar con foreach
