//se hace lo minimo para que pase el test
module.exports = function(numbers) {
  return numbers.map(number => number + 1);
};

//si pasa el test se refactoriza osea se pone bonito
module.exports = numbers => numbers.map(number => number + 1);
