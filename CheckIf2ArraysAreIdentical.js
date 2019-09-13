// 5. Write a function that returns true if two arrays are identical, and false otherwise.

function checkSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

//test
const a1 = [1,2,3], a2 = [1,2,3], a3 = [2, 3, 4];
console.log(checkSame(a1, a2));
console.log(checkSame(a1,a3));