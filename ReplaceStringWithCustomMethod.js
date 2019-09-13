    // 1. Write a custom method to replace the string "The quick brown fox jumps
    // over the lazy dog" with the string "The1 quick2 brown3 fox4 jumps5
    // over6 the7 lazy8 dog9"

var str = "The quick brown fox jumps over the lazy dog";
var arr = str.split(" ");
arr.forEach(function(word, i) {
    arr[i] = word + (i + 1);
})
var res = arr.join(" ");
console.log(res);