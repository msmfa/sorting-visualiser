export function QuickSortAlgo(arr) {
  const array = [...arr];
  const displayBars = [];
  quickSortHelper(array, 0, array.length - 1, displayBars);
  return displayBars;
}

function quickSortHelper(arr, left, right, displayBars) {
  if (right <= left) return;
  const part = partition(arr, left, right, displayBars);
  quickSortHelper(arr, left, part, displayBars);
  quickSortHelper(arr, part + 1, right, displayBars);
}

function partition(arr, left, right, displayBars) {
  let i = left;
  let j = right + 1;
  const pivot = arr[left];
  while (true) {
    while (arr[++i] <= pivot) {
      if (i === right) break;
      displayBars.push([[i], false]);
    }
    while (arr[--j] >= pivot) {
      if (j === left) break;
      displayBars.push([[j], false]);
    }
    if (j <= i) break;
    displayBars.push([[i, arr[j]], true]);
    displayBars.push([[j, arr[i]], true]);
    swap(arr, i, j);
  }
  displayBars.push([[left, arr[j]], true]);
  displayBars.push([[j, arr[left]], true]);
  swap(arr, left, j);
  return j;
}
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
//Could put this in it's separate component since it's being used more than once
