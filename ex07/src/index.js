var arr = [
  [13,27,18,26],
  [4,5,1,3],
  [32,35,37,39],
  [100,1001,857,1]
];

function largestNumFromArr(arr) {

  var maxNumArray = [0,0,0,0];

  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      if (arr[i][j] > maxNumArray[i]) {
        maxNumArray[i] = arr[i][j];
      }
    }

  }

  return maxNumArray;


}

largestNumFromArr(arr);

console.log(largestNumFromArr(arr));

module.exports = largestNumFromArr;
