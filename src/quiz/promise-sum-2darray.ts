/**
 * get the sum of a row of the 2D array input
 * @param arr - the 2D array input
 * @param rowIdx - the index of the row
 * @returns a promise of the sum of the row
 */
function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (arr.length > rowIdx) {
      let sum = 0;
      console.log(`Computing sum of row ${rowIdx} ... `);
      for (let i = 0; i < arr[rowIdx].length; i++) {
        sum += arr[rowIdx][i];
      }
      resolve(sum);
    } else {
      reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
    }
  });
}

/**
 * Asynchronously calculate the sum of a 2D array
 * @param arr - the 2D array input
 * @returns a promise of the string, indicating the calculation status
 */
async function calculateSum(arr: number[][]): Promise<string> {
  if (arr.length === 0) {
    throw "Cannot calculate sum of an empty array";
  }
  const rowSumPromises: Promise<number>[] = [];
  for (let x = 0; x < arr.length; x++) {
    rowSumPromises.push(sumOfARow(arr, x));
  }
  try {
    const rowSums = await Promise.all(rowSumPromises);
    console.log(rowSums);
    let sum = 0;
    rowSums.forEach((rowSum) => {
      sum += rowSum;
    });
    console.log(`Sum = ${sum}`);
    return "done";
  } catch (error) {
    console.log(`Error Msg: ${error}`);
    return "failed";
  }
}

const arr2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

calculateSum(arr2D);

console.log("End of main script ");
