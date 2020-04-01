export function MergeSortAlgo(arr) {
  const array = [...arr];
  const len = array.length;
  const secondaryArray = Array(len);
  const displayBars = [];
  mergeSortHelper(array, secondaryArray, 0, len - 1, displayBars);
  return displayBars;
}

function mergeSortHelper(arr, secondaryArray, left, right, displayBars) {
  if (right <= left) return;
  const midValue = left + Math.floor((right - left) / 2);
  mergeSortHelper(arr, secondaryArray, left, midValue, displayBars);
  mergeSortHelper(arr, secondaryArray, midValue + 1, right, displayBars);
  merge(arr, secondaryArray, left, midValue, right, displayBars);
}

function merge(arr, secondaryArray, left, midValue, right, displayBars) {
  for (let i = left; i <= right; i++) secondaryArray[i] = arr[i];
  let i = left;
  let j = midValue + 1;
  for (let k = left; k <= right; k++) {
    if (i > midValue) {
      displayBars.push([[j], false]);
      displayBars.push([[k, secondaryArray[j]], true]);
      arr[k] = secondaryArray[j++];
    } else if (j > right) {
      displayBars.push([[i], false]);
      displayBars.push([[k, secondaryArray[i]], true]);
      arr[k] = secondaryArray[i++];
    } else if (secondaryArray[j] < secondaryArray[i]) {
      displayBars.push([[i, j], false]);
      displayBars.push([[k, secondaryArray[j]], true]);
      arr[k] = secondaryArray[j++];
    } else {
      displayBars.push([[i, j], false]);
      displayBars.push([[k, secondaryArray[i]], true]);
      arr[k] = secondaryArray[i++];
    }
  }
}
