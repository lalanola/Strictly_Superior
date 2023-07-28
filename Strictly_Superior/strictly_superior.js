function heapSortRowsByFirstElement(arr) {
  function buildHeap(arr) {
    const len = arr.length;

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, len, i);
    }
  }

  function heapify(arr, len, index) {
    let largest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;

    if (leftChild < len && arr[leftChild][0] < arr[largest][0]) {
      largest = leftChild;
    }

    if (rightChild < len && arr[rightChild][0] < arr[largest][0]) {
      largest = rightChild;
    }

    if (largest !== index) {
      [arr[index], arr[largest]] = [arr[largest], arr[index]];

      heapify(arr, len, largest);
    }
  }

  const resultArr = [...arr];
  const len = resultArr.length;

  buildHeap(resultArr);

  for (let i = len - 1; i > 0; i--) {
    [resultArr[0], resultArr[i]] = [resultArr[i], resultArr[0]];

    heapify(resultArr, i, 0);
  }

  return resultArr;
}

// ヒープソートで行を並び替える
let arr = [
  [15000, [1, 2, 4]],
  [10000, [1, 3]],
  [30000, [1, 3, 5]],
  [35000, [1, 5]],
  [100000, [1, 2, 3, 4, 5, 6]],
];
let sortedArr = heapSortRowsByFirstElement(arr);
console.log(sortedArr);

o: for (let i = 0; i < sortedArr.length; i++) {
  for (let j = i + 1; j < sortedArr.length; j++) {
    let c1 = true;
    let c2 = false;
    for (const num of sortedArr[i][1]) {
      if (!sortedArr[j][1].includes(num)) {
        c1 = false;
        break;
      }
    }
    for (const num of sortedArr[j][1]) {
      if (!sortedArr[i][1].includes(num)) {
        c2 = true;
        break;
      }
    }
    if (c1 && (sortedArr[i][0] > sortedArr[j][0] || c2)) {
      console.log(sortedArr[j][0]);
      break o;
    }
  }
}
