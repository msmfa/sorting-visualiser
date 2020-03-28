## Data visualiser for sorting methods

### Merge Sort, Quick Sort, Heap Sort

4. Generate the function for Merge sort.
5. Add a button for those types of sort.
6. Render a visual change while the sorts are taking place.
7. Repeat for Quick and Heap sort.
8. A lot trickier than I thought to implement setTimeout method on the sort function.

## Bubble Sort
Compares pairs of numbers. Moved along one index and compares another paid using last index from previous comparison. Least efficient form of a sort because as the array grows the amount of swaps grows exponentially.

- (N2)

function quickSort(array) {
if (array.length <= 1) {
return array;
} else {
let left = [];
let right = [];
let newArray = [];
let pivot = array.pop();
let length = array.length;

    for (let i = 0; i < length; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));
    //Could use template literals here instead? Test?

}
}

function test() {
console.log("hey there");
}

console.log(quickSort([7, 3, 7, 3, 4, 5, 7, 9, 2]));
console.log(test());
-- tried to implement async await on the for loop to pause it but ran into issues.
