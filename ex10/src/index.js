
function mySplice(arr1, arr2, n) {

  var zero = 0;
      //arr2 = arr2.splice(n, zero, arr1)
      // go through the array and add it in arr2
      for (var counter = 0; counter < arr1.length; counter++) {
          arr2.splice(n, 0, arr1[counter]);
      }
     return arr2;
      //    return arr2;
}

mySplice([1,2,3], [4,5], 1);


console.log(mySplice([1,2,3], [4,5], 1));
console.log(mySplice([1,2,3], [4,5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));


module.exports = mySplice;
