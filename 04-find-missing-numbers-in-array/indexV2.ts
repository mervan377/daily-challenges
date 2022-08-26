const findMissingNumberV2 = (numbers: number[]): number[] => {
  let missingNumbers: number[] = [];
  for (let i = 0; i < 10; i++) {
    let flagMatched = false;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] === i) {
        flagMatched = true;
        break;
      }
    }
    if (!flagMatched) {
      missingNumbers.push(i); 
    }
  }
  return missingNumbers
};
const numbers: number[] = [0, 1, 3, 4, 6, 9]
let missedNumbers = findMissingNumberV2(numbers);

console.log("All numbers: " , numbers)
console.log("Missing: ", missedNumbers)

//const numbers: number[] = [0, 1, 3, 4, 6, 9];
// 0 ile 9 arasinda ki silinen sayilari bul
// method olacak example output [2, 5, 7, 8]
// number array alacak number array dönecek
