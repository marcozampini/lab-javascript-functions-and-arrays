// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 >= number2) {
    return number1
  } else {
    return number2
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']

function findLongestWord(wordsArray) {
  if (wordsArray.length == 0) {
    return null
  }
  if (wordsArray.length == 1) {
    return wordsArray[0]
  }
  let longestWord = ''
  let longestLength = 0
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestLength) {
      longestLength = wordsArray[i].length
      longestWord = wordsArray[i]
    }
  }
  return longestWord
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

function sumNumbers(numbersArray) {
  if (numbersArray.length == 0) {
    return 0
  }
  if (numbersArray.length == 1) {
    return numbersArray[0]
  }
  let partialSum = 0
  for (let i = 0; i < numbersArray.length; i++) {
    partialSum += numbersArray[i]
  }
  return partialSum
}

// Iteration #3.1 Bonus:
function sum(genericArray) {
  if (genericArray.length == 0) {
    return 0
  }
  if (genericArray.length == 1) {
    return genericArray[0]
  }
  let partialSum = 0
  for (let i = 0; i < genericArray.length; i++) {
    if (typeof genericArray[i] === 'string') {
      partialSum += genericArray[i].length
    } else if (typeof genericArray[i] === 'boolean') {
      if (genericArray[i] === true) {
        partialSum++
      }
    } else if (typeof genericArray[i] === 'object' || typeof genericArray[i] === 'array') {
      throw "Unsupported data type sir or ma'am"
    } else {
      partialSum += genericArray[i]
    }
  }
  return partialSum
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9]

function averageNumbers(numbersArray) {
  if (numbersArray.length == 0) {
    return null
  }
  if (numbersArray.length == 1) {
    return numbersArray[0]
  }
  return sumNumbers(numbersArray) / numbersArray.length
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace']

function averageWordLength(wordsArray) {
  if (wordsArray.length == 0) {
    return null
  }
  let partialSum = 0
  for (let i = 0; i < wordsArray.length; i++) {
    partialSum += wordsArray[i].length
  }
  return partialSum / wordsArray.length
}

// Bonus - Iteration #4.1
function avg(mixedArray) {
  if (mixedArray.length == 0) {
    return null
  }
  return Math.round((sum(mixedArray) / mixedArray.length) * 100) / 100
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
]

function uniquifyArray(arrayToBeUniquified) {
  if (arrayToBeUniquified.length == 0) {
    return null
  }
  let uniquifiedArray = []
  for (let i = 0; i < arrayToBeUniquified.length; i++) {
    if (uniquifiedArray.includes(arrayToBeUniquified[i])) {
      continue
    } else {
      uniquifiedArray.push(arrayToBeUniquified[i])
    }
  }
  return uniquifiedArray
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience']

function doesWordExist(wordsArray, wordToSearch) {
  if (wordsArray.length == 0) {
    return null
  }
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordToSearch) {
      return true
    }
  }
  return false
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
]

function howManyTimes(wordsArray, wordToSearch) {
  if (wordsArray.length == 0) {
    return 0
  }
  let countTimes = 0
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordToSearch) {
      countTimes++
    }
  }
  return countTimes
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
]

function greatestLineProduct(arrayToTest) {
  let greatestPartialLineProduct = 0
  let partialLineProduct = 0
  for (let i = 0; i < arrayToTest.length - 3; i++) {
    partialLineProduct = arrayToTest[i] * arrayToTest[i + 1] * arrayToTest[i + 2] * arrayToTest[i + 3]

    if (partialLineProduct > greatestPartialLineProduct) {
      greatestPartialLineProduct = partialLineProduct
    }
  }

  return greatestPartialLineProduct
}

function transposeMatrix(matrixToTranspose) {
  const transposedMatrix = []

  for (let i = 0; i < matrixToTranspose[0].length; i++) {
    transposedMatrix.push([])
    for (let j = 0; j < matrixToTranspose.length; j++) {
      transposedMatrix[i].push(matrixToTranspose[j][i])
    }
  }
  return transposedMatrix
}

function greatestProduct(matrixToTest) {
  let greatestGreatestLineProduct = 0
  for (let i = 0; i < matrixToTest.length; i++) {
    if (greatestLineProduct(matrixToTest[i]) > greatestGreatestLineProduct) {
      greatestGreatestLineProduct = greatestLineProduct(matrixToTest[i])
    }
  }
  console.log('greatestGreatestLineProduct', greatestGreatestLineProduct)
  let greatestGreatestColumnProduct = 0
  const transposedMatrix = transposeMatrix(matrixToTest)
  for (let j = 0; j < transposedMatrix.length; j++) {
    if (greatestLineProduct(transposedMatrix[j]) > greatestGreatestColumnProduct) {
      greatestGreatestColumnProduct = greatestLineProduct(transposedMatrix[j])
    }
  }
  console.log('greatestGreatestColumnProduct', greatestGreatestColumnProduct)
  if (greatestGreatestLineProduct >= greatestGreatestColumnProduct) {
    return greatestGreatestLineProduct
  } else {
    return greatestGreatestColumnProduct
  }
}

//Bonus - Iteration #8.1: Product of diagonals
//with another approach
function greatestProductOfDiagonals(matrixToTest) {
  let greatestPartialProductOfDiagonals = 0
  let partialProductOfDiagonalRight = 0
  let partialProductOfDiagonalLeft = 0

  for (let i = 0; i < matrixToTest.length - 3; i++) {
    for (let j = 0; j < matrixToTest.length - 3; j++) {
      partialProductOfDiagonalRight =
        matrixToTest[i][j] * matrixToTest[i + 1][j + 1] * matrixToTest[i + 2][j + 2] * matrixToTest[i + 3][j + 3]
      partialProductOfDiagonalLeft =
        matrixToTest[i][j + 3] * matrixToTest[i + 1][j + 2] * matrixToTest[i + 2][j + 1] * matrixToTest[i + 3][j]
      if (partialProductOfDiagonalRight > greatestPartialProductOfDiagonals) {
        greatestPartialProductOfDiagonals = partialProductOfDiagonalRight
      }
      if (partialProductOfDiagonalLeft > greatestPartialProductOfDiagonals) {
        greatestPartialProductOfDiagonals = partialProductOfDiagonalLeft
      }
    }
  }

  return greatestPartialProductOfDiagonals
}

console.log('greatestProductOfDiagonals', greatestProductOfDiagonals(matrix))

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  }
}
