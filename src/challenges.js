// Desafio 1
function compareTrue(boolean1, boolean2) {
  let result = false;
  if (boolean1 && boolean2) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceArray = sentence.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(stringArray) {
  let finalString = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
  return finalString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(valuesArray) {
  let highest = valuesArray[0];
  for (let i = 1; i <= valuesArray.length - 1; i += 1) {
    if (valuesArray[i] > highest) {
      highest = valuesArray[i];
    }
  }

  let count = 0;
  for (let value of valuesArray) {
    if (value === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
