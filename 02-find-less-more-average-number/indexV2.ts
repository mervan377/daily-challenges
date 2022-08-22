const findSmallBigAverageV2 = (numbers: number[]): void => {
  let smallestNumber: number = numbers[0];
  let biggestNumber: number = numbers[0];
  let sum: number = 0;

  for (
    let numbersLength: number = 1;
    numbersLength <= numbers.length;
    numbersLength++
  ) {
    let number: number = numbers[numbersLength - 1];
    if (smallestNumber > number) {
      smallestNumber = number;
    }
    if (biggestNumber < number) {
      biggestNumber = number;
    }
    sum += number;
  }

  const averageNumber: number = sum / numbers.length;

  console.log("The smallest number is " + smallestNumber);
  console.log("The biggest number is " + biggestNumber);
  console.log("The average number is " + averageNumber);
};

const all_umbers: number[] = [1, 5, 2, 6, 4, 0, 8, 3, 7, 9, 1000, -1];
findSmallBigAverageV2(all_umbers);
