function findMax(arr, low, high) {
    if (low === high) {
        return arr[low];
    }

    let mid = Math.floor((low + high) / 2);
    
    let leftMax = findMax(arr, low, mid);
    let rightMax = findMax(arr, mid + 1, high);
    
    return Math.max(leftMax, rightMax);
}

function maxInArray(arr) {
    return findMax(arr, 0, arr.length - 1);
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(maxInArray(arr));  
