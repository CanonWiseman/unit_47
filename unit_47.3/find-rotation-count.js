function findRotationCount(arr, low = 0, high = arr.length - 1) {
    if (high < low) return 0;
    if (high === low) return low;
    let mid = Math.floor((low + high) / 2)

    if (mid < high && arr[mid + 1] < arr[mid])
      return mid + 1;
  
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid;
    }
  
    if (arr[high] > arr[mid]) {
      return findRotationCount(arr, low, mid - 1);
    }
  
    return findRotationCount(arr, mid + 1, high);
} 

// expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2)
// expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
// expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)

module.exports = findRotationCount