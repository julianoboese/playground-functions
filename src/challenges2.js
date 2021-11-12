// Desafio 10
/**
 * Para fazer o ordenamento dos objetos, utilizei a função "compare", disponível no link abaixo.
 * Source: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
 */
function compare(a, b) {
  if (a.tech < b.tech) {
    return -1;
  }
  if (a.tech > b.tech) {
    return 1;
  }
  return 0;
}

function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  let newArray = [];
  for (let technology of techArray) {
    newArray.push({
      tech: technology,
      name,
    });
  }
  /** Source: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value */
  let sortedArray = newArray.sort(compare);
  return sortedArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
