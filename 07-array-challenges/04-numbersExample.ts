const runNumbers = (numbers: number[]): void => {};

const numbers: number[] = [1, 2, 5, 6, 8, 9];

numbers.filter((data) => {
  const resultNumber: number[] = [];
  for (let i = 1; i < 10; i++) {
    if (data !== i) {
      console.log(data);
    }
  }
});
