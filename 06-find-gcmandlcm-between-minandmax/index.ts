const findGcmLcm = (min, max, number1, number2): number[] => {
  let gcmlcmNumbers: number[] = [];
  for (let i = min; i <= max; i++) {
    if (i % (number1 * number2) === 0) {
      gcmlcmNumbers.push(i);
    }
  }
  return gcmlcmNumbers;
};
const findGcmLcmNumbers: number[] = findGcmLcm(0, 20, 2, 4);
console.log(findGcmLcmNumbers);
//İki sayı arasında ki dışarıdan gelen rastgele iki sayının okek ve obebini bulan fonksiyon
