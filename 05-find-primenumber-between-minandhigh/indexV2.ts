const findPrimeNumberV2 = (min, max) => {
  let primeNumbers: number[] = [];

  if (min < 2) {
    min = 2;
  }
  for (let i = min; i <= max; i++) {
    let flagMatched = false;
    for (let j = 3; j <= i; j++) {
      if (i % (j - 1) === 0) {
        flagMatched = true;
        break;
      }
    }
    if (!flagMatched) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
};
const foundPrimeNumbersV2: number[] = findPrimeNumberV2(0, 50);
console.log(foundPrimeNumbersV2);

// Bir fonksiyon var iki adet sayı parametresi alıyor.
// Alt limit üst limit diye. Bu iki sayı arasında ki asal sayılar bulunacak
// Dizi olarak geri döndürecek
