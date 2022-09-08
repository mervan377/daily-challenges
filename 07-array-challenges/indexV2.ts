const findNumbersArrayV2 = (numbers: number[]): void => { 
    const evenNum = numbers.filter((data) => {
        return data % 2 === 0
    })

    const oddNum = numbers.filter((data) => {
        return data % 2 === 1
    })

    console.log("Even numbers are:", evenNum)
    console.log("Odd numbers are:", oddNum)
};

const numbersV2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
findNumbersArrayV2(numbersV2);