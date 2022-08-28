const findPrimeNumber = (min, max) => {
  let primeNumbers: number[] = [];
  min <= 2 ? (min = 2) : min;
  while (min <= max) {
    if (min === 2 || min === 3 || min === 5 || min === 7 || min === 11) {
      primeNumbers.push(min);
    }
    if (
      min % 2 !== 0 &&
      min % 3 !== 0 &&
      min % 5 !== 0 &&
      min % 7 !== 0 &&
      min % 11 !== 0
    ) {
      primeNumbers.push(min);
    }
    min++;
  }
  return primeNumbers
};
console.log(findPrimeNumber(0,500))

// Bir fonksiyon var iki adet sayı parametresi alıyor.
// Alt limit üst limit diye. Bu iki sayı arasında ki asal sayılar bulunacak
// Dizi olarak geri döndürecek
