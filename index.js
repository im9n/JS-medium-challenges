// Q1 Falsy or truthy?

// function filterOutFalsy(elem1, elem2){
// return elem1 ? elem2 : elem1
// }

// console.log(filterOutFalsy(undefined, 'dog'))

// Q2 Return the length of any given array

// function arrLength(array){
//     return array.length
// }

// console.log(arrLength([1, 2, 3, 4]))

// Q3 Get last element in array

// function arrLength(array){
//     return array[array.length-1]
// }

// console.log(arrLength([1, 2, 3, 4]))

// Q4 Find the sum of an array

// function arrSum(array){
// let sum = 0;
// for(let i = 0; i < array.length; ++i){
// sum += array[i]
// }
// return sum
// }

// console.log(arrSum([5, 3, 2]))

// Q5 Add up the numbers from a single number

// function progressiveSum(num){
// let newSum = 0
// for(let i = 1; i <= num; ++i){
// newSum += i
// console.log ('this ran')
// }
// return newSum
// }

// console.log(progressiveSum(4))

// Q6 Calculate the time

// function calcTime(seconds) {
//   let timerMinute = Math.floor(seconds / 60)
//   let timerSeconds = seconds % 60;
//   if (timerMinute.toString().length === 1){
//     timerMinute = '0' + timerMinute
//   }
//   if (timerSeconds.toString().length === 1){
//     timerSeconds = '0' + timerSeconds
//   }
//   return timerMinute + ':' + timerSeconds
// }

// console.log(calcTime(50));

// Q7. Find the largest number

// function getMax(array){
//   let max = array[0]
//   for(let i = 1; i < array.length; ++i){
//     if(array[i] > max){
//       max = array[i]
//     }
//   }
//   return max;
// }

// console.log(getMax([100, 200, 300]))

// Q8. Reverse a string{}

// function reverseString(str){
//   let reverseString = ''
//   for(let i = 1;  i <= str.length; ++i){
//   reverseString += str[str.length - i]
//   }
//   return reverseString
// }

// console.log(reverseString('Easy'))

//  Q9. Convert all the values to 0

// arr = [5, 4, 3 ,9, 6]

// let newArr = arr.map(element => 0
// )

// console.log(newArr)

// Q10. Filter out all the apples

// function removeApples(arr){
// return arr.filter(elem => elem !== 'apple')
// }

// console.log(removeApples(['apple', 'pear', 'banana', 'apple']))

// Q11. Filter out all falsey values

// function removeFalsey(arr){
// return arr.filter(elem => !!elem === true)
// }

// console.log(removeFalsey(['ben', NaN, 14, null, undefined]))


// function removeFalsey(arr){
//   let truthyValues = []
//   for(let i = 0; i < arr.length; ++i){
//     if(!!arr[i] === true){
//       truthyValues.push(arr[i])
//     }
//   }
//   return truthyValues
//   }
  
//   console.log(removeFalsey(['ben', NaN, 14, null, undefined]))

// Q12 Truthy to true, Falsy to false
 
// function truthyFalsy(arr){
// return arr.map(elem => !!elem)
// }

// console.log(truthyFalsy([5,10,0,'']))
