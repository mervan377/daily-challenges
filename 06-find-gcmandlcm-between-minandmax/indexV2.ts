const findGcmLcmV2 = (min, max, number1, number2): number[] => {
  let gcmlcmNumbers: number[] = [];
  let commonDivideNumbers: number[] = [];
  let newNumber1: number;
  let newNumber2: number;
  let bigNumber: number;
  let mainNumber: number = number1 * number2;

  if (number1 > number2) {
    bigNumber = number1;
  } else {
    bigNumber = number2;
  }

  for (let j = 0; j < bigNumber; j++) {
    if (number1 % j === 0 && number2 % j === 0) {
      newNumber1 = number1 / j;
      newNumber2 = number2 / j;
      commonDivideNumbers.push(j);
    }
  }
  console.log(commonDivideNumbers);

  commonDivideNumbers.forEach((key) => {
    mainNumber = mainNumber / key;
  });

  for (let i = min; i <= max; i++) {
    if (i % mainNumber === 0) {
      gcmlcmNumbers.push(i);
    }
  }
  return gcmlcmNumbers;
};
const findGcmLcmNumbersV2: number[] = findGcmLcmV2(0, 64, 2, 16);
console.log(findGcmLcmNumbersV2);

//İki sayı arasında ki dışarıdan gelen rastgele iki sayının okek ve obebini bulan fonksiyon
