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
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// With 2 arrays should we implement funcionality twice?
// NO! Just merge two arrays

// 2) Breaking up into sub-problems
// Merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 8, 11], [3, 6, 7, 9, 15]);
console.log(amplitudeNew);
