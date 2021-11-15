// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(valuesArray) {
  /** Ref 1: Para reduzir a complexidade da função e atender ao ESLint, utilizei a função Math.max.
   * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max#retornando_o_maior_elemento_de_um_array */
  let highest = Math.max(...valuesArray);
  let count = 0;
  for (let value of valuesArray) {
    if (value === highest) {
      count += 1;
    }
  }
  return count;
}

// function highestCount2(valuesArray) {
//   let highest = valuesArray[0];
//   for (let i = 1; i < valuesArray.length; i += 1) {
//     if (valuesArray[i] > highest) {
//       highest = valuesArray[i];
//     }
//   }

//   let count = 0;
//   for (let value of valuesArray) {
//     if (value === highest) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(highestCount2([9, 1, 2, 3, 9, 5, 7]));

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
// Função auxiliar criada para reduzir a complexidade da função "fizzBuzz".
function verifyFizzBuzz(number, fizz, buzz) {
  if (number % fizz === 0 && number % buzz === 0) {
    return 'fizzBuzz';
  } if (number % fizz === 0) {
    return 'fizz';
  } if (number % buzz === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  for (let number of numbersArray) {
    fizzBuzzArray.push(verifyFizzBuzz(number, 3, 5));
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(stringToEncode) {
  let conversionObject = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encodedString = stringToEncode;
  for (let key in conversionObject) {
    /** Ref 2: abaixo da função. */
    if ({}.hasOwnProperty.call(conversionObject, key)) {
      /** Ref 3: abaixo da função. */
      let replacedLetter = new RegExp(key, 'g');
      /** Ref 4: abaixo da função. */
      encodedString = encodedString.replace(replacedLetter, conversionObject[key]);
    }
  }
  return encodedString;
}
/** Ref 2: Condicional criado conforme documentação do ESLint para viabilizar a utilização do "for in".
* Source: https://eslint.org/docs/rules/guard-for-in */
/** Ref 3: Utilizei o objeto "new RegExp" para implementar o método "replace" com a flag "g".
* Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp */
/** Ref 4: Para reduzir a complexidade da função, utilizei o método "replace" com a flag "g" (global) para substituir todas as ocorrências sem necessidade de um loop.
* Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll */

// Versão alternativa sem utilização de funções/métodos consultados na internet, porém com complexidade acima de 5.
// function encode2(stringToEncode) {
//   let conversionArray = ['a', 'e', 'i', 'o', 'u'];
//   let encodedString = stringToEncode;
//   for (let i = 0; i < stringToEncode.length; i += 1) {
//     for (let j = 0; j < conversionArray.length; j += 1) {
//       if (stringToEncode[i] === conversionArray[j]) {
//         encodedString = encodedString.replace(encodedString[i], j + 1);
//       }
//     }
//   }
//   return encodedString;
// }
// console.log(encode2('hi there!'));

function decode(stringToEncode) {
  let conversionObject = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let decodedString = stringToEncode;
  for (let key in conversionObject) {
    if ({}.hasOwnProperty.call(conversionObject, key)) {
      let replacedNumber = new RegExp(conversionObject[key], 'g');
      decodedString = decodedString.replace(replacedNumber, key);
    }
  }

  return decodedString;
}

// Versão alternativa sem utilização de funções/métodos consultados na internet, porém com complexidade acima de 5.
// function decode2(stringToDecode) {
//   let conversionArray = ['a', 'e', 'i', 'o', 'u'];
//   let decodedString = stringToDecode;
//   for (let i = 0; i < stringToDecode.length; i += 1) {
//     for (let j = 0; j < conversionArray.length; j += 1) {
//       /** Ref 5: Usei a função Number para poder usar o operador === em vez de ==
//        * Source: https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript */
//       if (Number(stringToDecode[i]) === j + 1) {
//         decodedString = decodedString.replace(
//           decodedString[i],
//           conversionArray[j],
//         );
//       }
//     }
//   }
//   return decodedString;
// }
// console.log(decode2('h3 th2r2!'));

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
