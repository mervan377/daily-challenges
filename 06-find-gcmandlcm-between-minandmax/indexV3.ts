const findGcmLcmV3 = (min, max, number1, number2): number[] => {
  let gcmlcmNumbers: number[] = [];
  for (let i = min; i <= max; i++) {
    if (i % number1 === 0 && i % number2 === 0) {
      gcmlcmNumbers.push(i);
      i++;
    }
  }
  gcmlcmNumbers.shift()
  return gcmlcmNumbers;
};
const findGcmLcmNumbersV3: number[] = findGcmLcmV3(0, 62, 2, 4);
console.log(findGcmLcmNumbersV3);

//İki sayı arasında ki dışarıdan gelen rastgele iki sayının okek ve obebini bulan fonksiyon