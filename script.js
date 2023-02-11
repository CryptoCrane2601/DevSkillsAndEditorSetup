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

const temperatures = [3, -2, -5, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
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

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp[i] > max) max = curTemp[i];
    if (curTemp[i] < min) min = curTemp[i];
  }
  console.log(max);
};

calcTempAmplitude([2, 7, 3]);
