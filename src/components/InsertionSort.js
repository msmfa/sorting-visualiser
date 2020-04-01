export function InsertionSortAlgo(arr) {
  const copy = [...arr];
  const displayBars = [];
  for (let i = 1; i < copy.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      displayBars.push([[j, j + 1], false]);
      if (copy[j + 1] < copy[j]) {
        displayBars.push([[j, copy[j + 1]], true]);
        displayBars.push([[j + 1, copy[j]], true]);
        swap(copy, j, j + 1);
      } else break;
    }
  }
  return displayBars;
}
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
