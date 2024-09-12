function fibs(n) {
  let arr = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}

function fibsRec(n, arr = [0, 1]) {
  if (arr.length >= n) {
    return arr.slice(0, n);
  }
  let next = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(next);
  return fibsRec(n, arr);
}
