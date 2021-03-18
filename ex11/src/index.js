function splitArrayInGroups(arr, n) {

var result =[];

for (i=0; i<arr.length; i+=0) {
      var sliced = arr.slice(i, n);
      result.push(sliced);
      arr.splice(0, n);
  }
  return result;
}

splitArrayInGroups(["a","b", "c", "d"],2);


console.log(splitArrayInGroups(["a","b", "c", "d"], 2));
console.log(splitArrayInGroups([0,1,2,3,4,5,6], 3));
console.log(splitArrayInGroups([0,1,2,3,4,5], 2));
console.log(splitArrayInGroups([0,1,2,3,4,5,6,7,8], 3));
console.log(splitArrayInGroups([0,1,2,3,4,5,6,7,8], 2));

module.exports = splitArrayInGroups;
