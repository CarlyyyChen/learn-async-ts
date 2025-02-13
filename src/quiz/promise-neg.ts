/**
 * Check if there is any negative number in a row
 * @param arr - the 2D array input
 * @param rowIdx - the index of the row to check
 * @returns a promise of a string to indicate whethere there is a negative number in the given row
 */
function negsPerRow(arr: number[][], rowIdx: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (arr.length > rowIdx) {
      arr[rowIdx].filter((e) => {
        return e < 0;
      }).length > 0
        ? resolve(`Found Evidence: ${arr[rowIdx]}, it is in row ${rowIdx}`)
        : reject(`No negative number found in row ${rowIdx}`);
    } else {
      reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
    }
  });
}

const array2D_3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, -9],
];

let negsPerRowPromise: Promise<string>[] = [];

for (let x = 0; x < array2D_3.length; x++) {
  negsPerRowPromise.push(negsPerRow(array2D_3, x));
}

Promise.any(negsPerRowPromise)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(`Error Msg: ${error}`);
  });
