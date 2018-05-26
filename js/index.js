/*
@scarfino 2018
This script will take a phrase and translate it into "whale talk".
*/

const input = 'sup im a whale';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }

  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join('').toUpperCase());
