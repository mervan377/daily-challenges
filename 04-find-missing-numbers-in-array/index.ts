const findMissingNumber = (numbers: number[]) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] === i) {
        i = 9;
      }
    }
  }
};
findMissingNumber([2, 3, 4, 6, 9]);

//const numbers: number[] = [0, 1, 3, 4, 6, 9];
// 0 ile 9 arasinda ki silinen sayilari bul
// method olacak example output [2, 5, 7, 8]
// number array alacak number array dönecek