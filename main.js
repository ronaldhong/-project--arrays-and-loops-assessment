// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = <your answer>
// total = <your answer>


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:
function longestString(strings){
    longest=strings[0];
    for (var i in strings){
      if (strings[i].length>=longest.length){
          longest=strings[i];
      }
  }
  return longest;

}

console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
function smallestNumber(numbers){
  smallestNum=numbers[0];
  for (let i=0; i<numbers.length; i++ ){
    if (smallestNum>=numbers[i]){
      smallestNum=numbers[i];
    }
  }
  return smallestNum;
}
console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});
// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:
function getEvens(numbers){
  evenArr=[];
  for (let i=0; i <numbers.length; i++){
    if (numbers[i]%2===0){
      evenArr.push(numbers[i]);
    }
  }
  return evenArr;
}
console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});
// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:
function Reverse(numbers){
    newArr=[];
    for (let i = numbers.length-1; i!=-1;i--){
        last=numbers.pop();
        newArr.push(last);
    }
    return newArr;

}

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
function sum(numbers){
  sum=0
  for (let i=0; i<numbers.length; i++){
    sum+=numbers[i];
  }
  return sum;
}

console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
function Greater(numbers){
    list=[];
    for (let i=0; i<numbers.length; i++){
        if (numbers[i]>10){
            list.push(numbers[i]);
        }
    }
    return list;
}


console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:
function Greater(numbers, num){
    list=[];
    for (let i=0; i<numbers.length; i++){
        if (numbers[i]>num){
            list.push(numbers[i]);
        }
    }
    return list;
}

console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays(numbers, numbersTwo){
    j=numbersTwo.length
    for (i=0; i<j;i++){
        numbers.push(numbersTwo[0]);
        numbersTwo.splice(0,1);
    }
    return numbers;
}

console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = ['Will','JavaScript'],

var instructorOne = instructors[4][0];
// instructorOne = Dan

var instructorTwo = instructors[0][1];
// instructorTwo = JavaScript

var instructorThree = instructors[2][0];
// instructorThree = Brit
