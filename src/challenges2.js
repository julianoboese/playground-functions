// Desafio 10
function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  let sortedArray = techArray.sort();
  let newTechArray = [];
  for (let technology of sortedArray) {
    newTechArray.push({ tech: technology, name });
  }
  return newTechArray;
}

// Desafio 11
// Função auxiliar criada para reduzir a complexidade da função "generatePhoneNumber".
function checkInvalidNumber(numberArray) {
  for (let number of numberArray) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
  return false;
}

// Função auxiliar criada para reduzir a complexidade da função "checkRepeated".
function createNumberObject(numberArray) {
  let numberObject = {};
  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberObject[numberArray[i]] === undefined) {
      numberObject[numberArray[i]] = 1;
    } else {
      numberObject[numberArray[i]] += 1;
    }
  }
  return numberObject;
}

// Função auxiliar criada para reduzir a complexidade da função "generatePhoneNumber".
function checkRepeated(numberObject) {
  let phoneNnumberObject = createNumberObject(numberObject);
  for (let key in phoneNnumberObject) {
    if (phoneNnumberObject[key] >= 3) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(phoneNumberArray) {
  if (phoneNumberArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (checkInvalidNumber(phoneNumberArray) === true || checkRepeated(phoneNumberArray) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let ddd = `(${phoneNumberArray.splice(0, 2).join('')})`;
  let phoneNumber = `${ddd} ${phoneNumberArray.splice(0, 5).join('')}-${phoneNumberArray.join('')}`;

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lines = [lineA, lineB, lineC];
  let triangle = true;
  for (let i = 0; i < lines.length; i += 1) {
    if (
      lines[0] >= lines[1] + lines[2]
      || lines[1] <= Math.abs(lines[1] - lines[2])
    ) {
      triangle = false;
    }
    lines.push(lines[0]);
    lines.shift();
  }
  return triangle;
}

// Desafio 13
function hydrate(drinks) {
  /** Ref 6: A primeira linha desta função foi utilizada para gerar um array com os números da string "drinks".
   * Source: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
   */
  let numbers = drinks.match(/\d+/g).map(Number);
  let water = 0;
  for (let number of numbers) {
    water += number;
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
