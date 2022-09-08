const multiplications = (numbers: number): void => {
  for (let i = 1; i <= 10; i++) {
    for(let j = 1; j <=10;j++) {
        console.log(j , "*" , i , " = " , (j * i))
    }
    console.log("------------------------")
  }
};

const numberslar: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

multiplications(3)