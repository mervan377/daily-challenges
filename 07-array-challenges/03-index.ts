const findNumbersArray = (numbers: number[]): void => {
    const eventNumbers: number[] = [];
    const oddNumbers: number[] = [];
    
    const evenNum = numbers.filter((data) => {
        if(data % 2 === 0) {
            eventNumbers.push(data)
        }
    })

    const oddNum = numbers.filter((data) => {
        if(data % 2 === 1) {
            oddNumbers.push(data)
        }
    })

    console.log("Even numbers are:", evenNum)
    console.log("Odd numbers are:", oddNum) 
};

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
findNumbersArray(numbers);