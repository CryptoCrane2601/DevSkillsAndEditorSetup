// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xyz = 23;
// if (xyz === 23) console.log('23');

// const calcAge = birthYear => 2023 - birthYear;

// console.log(xyz);
// console.log(calcAge(1989));

// LEC
// TODO
// BUG

// const temperatures = [3, -2, -5, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// console.log(temperatures);

//Understanding the problem
//What is temp amplitude?
//How to compute max and min temp?
//Waht's a sensor error? And what to do?

//Breaking into sub-problems
//How to ignore error?
//Find max value in temp array
//Find min  value in temp array
//Subtract min and max value (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// With 2 arrays should we implement funcionality twice?
// NO! Just merge two arrays

// 2) Breaking up into sub-problems
// Merge two arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 8, 11], [3, 6, 7, 9, 15]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measuerment = {
//     type: 'temp',
//     unit: 'cels',
//     value: Number(prompt('Degress celsius:')),
//   };
//   const kelvin = measuerment.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17??C in 1
// days ... 21??C in 2 days ... 23??C in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// ?? Data 1: [17, 21, 23]
// ?? Data 2: [12, 5, -5, 0, 4]

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}??C in ${i + 1} days...`);
  }
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

// Understanding the problem

// Subprolems:
// print max temp
// How to get 1 instead 0 in string
