function findSmallBigAverage() {
  const numbers: number[] = [1, 5, 2, 6, 4, 0, 8, 3, 7, 9];
  let numbersLength: number = numbers.length;
  let smallNumber: number = 999;
  let bigNumber: number = 0;
  let aveNumber: number = 0;
  while (numbersLength > 0) {
    let allNumbers: number = numbers[numbersLength - 1];
    if (smallNumber > allNumbers) {
      smallNumber = allNumbers;
    }
    if (bigNumber < allNumbers) {
      bigNumber = allNumbers;
    }
    aveNumber += allNumbers;
    numbersLength--;
  }
  console.log("The smallest number is " + smallNumber);
  console.log("The biggest number is " + bigNumber);
  console.log("The average number is " + aveNumber / numbers.length);
}
 
findSmallBigAverage();