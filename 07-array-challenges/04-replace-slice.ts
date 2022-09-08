



const arr1: number[] = [1,2,3,4,5,6,7,8,9]
const arr2: number[] = [5,0,0,0,1]
console.log(arr2) 
let startPosition: number = Math.floor(arr1.length) / 2

const middleArray: number[] = arr1.slice(1,4) 

arr2.splice(1,3, ...middleArray)

console.log("--------")
console.log(arr2) 

// Q. Write a program to replace 3 center elements of the 1st array by center 3 elements of the 2nd array