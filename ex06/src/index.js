var myArray = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

function multiplyArrayFunction(myArray) {

var arr = [];
var product = 1;
var sum = 0;

for (var i=0; i < myArray.length; i++) {
  for (var j=0; j < myArray[i].length; j++) {
    product *= myArray[i][j];
    sum += myArray[i][j];
  }
    arr = [product, sum];
}

return arr;

}

multiplyArrayFunction(myArray);



console.log(multiplyArrayFunction(myArray));

module.exports = multiplyArrayFunction;
