const analyzeArray = (numbers) => {
  // Cantidad total de elementos en el arreglo
  const totalElements = numbers.length;

  // Filtrar y contar la cantidad de números pares
  const totalPairs = numbers.filter((num) => num % 2 === 0).length;

  // Calcular la cantidad de números impares restando los pares del total
  const totalOdds = totalElements - totalPairs;

  // Filtrar y contar la cantidad de números mayores a 1000
  const totalAbove1000 = numbers.filter((num) => num > 1000).length;

  // Encontrar el número máximo y mínimo en el arreglo
  const maxNumber = Math.max(...numbers);
  const minNumber = Math.min(...numbers);

  // Calcular la suma de todos los números en el arreglo
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // Calcular el promedio de todos los números en el arreglo
  const average = sum / totalElements;

  // Devolver un objeto con la información solicitada
  return {
    totalElements,
    percentagePairs: (totalPairs / totalElements) * 100,
    percentageOdds: (totalOdds / totalElements) * 100,
    percentageAbove1000: (totalAbove1000 / totalElements) * 100,
    maxNumber,
    minNumber,
    average,
    percentageMin: (minNumber / maxNumber) * 100,
    percentageAverage: (average / maxNumber) * 100,
  };
};

// Ejemplo de uso
const numbersArray = [589, 743, 912, 1163, 1279, 1335, 1548, 2087, 3321, 4589, 5462, 6748, 7824, 8351];
console.log(analyzeArray(numbersArray));