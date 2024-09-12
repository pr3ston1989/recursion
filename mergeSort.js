function mergeArrays(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  mergedArr = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex);

  const leftSorted = mergeSort(leftArray);
  const rightSorted = mergeSort(rightArray);

  return mergeArrays(leftSorted, rightSorted);
}
