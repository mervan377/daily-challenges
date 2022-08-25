const findMissingNumber = (numbers: number[]) => {
  let i = 0;

  while (i < 10) {
    for (let number in numbers) {
      if (numbers[number] === i) {
        console.log(number);
        console.log("Triyng for Mr. Emin ")
      }
    }
    i++;
  }
};

const numbers: number[] = [0, 1, 3, 4, 6, 9];

// 0 ile 9 arasinda ki silinen sayiulari bul
// method olacak example output [2, 5, 7, 8]
// number array alacak number array d,necek
