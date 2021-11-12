// Desafio 1
function compareTrue(boolean1, boolean2) {
  let result = false;
  if (boolean1 && boolean2) {
    result = true;
  }
  return result;
}

console.log(compareTrue(false, false));

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
  for (let i = 1; i < valuesArray.length; i += 1) {
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
function catAndMouse(mouse, cat1, cat2) {
  let winner;
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    winner = 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    winner = 'cat2';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner;
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  for (let number of numbersArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (number % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(stringToEncode) {
  let conversionArray = ['a', 'e', 'i', 'o', 'u'];
  let encodedString = stringToEncode;
  for (let i = 0; i < stringToEncode.length; i += 1) {
    for (let j = 0; j < conversionArray.length; j += 1) {
      if (stringToEncode[i] === conversionArray[j]) {
        encodedString = encodedString.replace(encodedString[i], j + 1);
      }
    }
  }
  return encodedString;
}

function decode(stringToDecode) {
  let conversionArray = ['a', 'e', 'i', 'o', 'u'];
  let decodedString = stringToDecode;
  for (let i = 0; i < stringToDecode.length; i += 1) {
    for (let j = 0; j < conversionArray.length; j += 1) {
      if (stringToDecode[i] == j + 1) {
        decodedString = decodedString.replace(
          decodedString[i],
          conversionArray[j],
        );
      }
    }
  }
  return decodedString;
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
