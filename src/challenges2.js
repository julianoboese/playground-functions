// Desafio 10
/** Foi criada a função "bubbleSort" com base no algoritmo disponibilizado no course.
 * Source: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-array-e-loop-for/3d453622-6c99-46af-a884-fecc68811230/exercicios/01cd0d52-03f7-4c66-8c94-2fe2a642d715/bonus/03759a6f-6460-4a79-8ab8-9aa449dad32b?use_case=side_bar
 */
function bubbleSort(arrayToSort) {
  for (let i = 1; i < arrayToSort.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arrayToSort[i] < arrayToSort[j]) {
        let position = arrayToSort[i];
        arrayToSort[i] = arrayToSort[j];
        arrayToSort[j] = position;
      }
    }
  }
  return arrayToSort;
}

function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  let sortedArray = bubbleSort(techArray);
  let newTechArray = [];
  for (let technology of sortedArray) {
    newTechArray.push({ tech: technology, name });
  }
  return newTechArray;
}

// Desafio 11
function generatePhoneNumber(phoneNumberArray) {
  if (phoneNumberArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let number of phoneNumberArray) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let count = 1;
  let repeated = false;
  for (let i = 2; i < phoneNumberArray.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (phoneNumberArray[i] === phoneNumberArray[j]) {
        count += 1;
      }
    }
    if (count >= 3) {
      repeated = true;
    }
    count = 1;
  }
  if (repeated) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = `(${phoneNumberArray[0]}${phoneNumberArray[1]}) ${phoneNumberArray[2]}${phoneNumberArray[3]}${phoneNumberArray[4]}${phoneNumberArray[5]}${phoneNumberArray[6]}-${phoneNumberArray[7]}${phoneNumberArray[8]}${phoneNumberArray[9]}${phoneNumberArray[10]}`;

  return phoneNumber;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
