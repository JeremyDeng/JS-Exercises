// 4. Write a regular expression that matches any string containing at least one digit.

var patt = /\d/;
var res1 = patt.test("test1");
var res2 = patt.test("test");
console.log(res1);
console.log(res2);