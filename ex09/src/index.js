
function myBouncer(arr) {

  var result =[]
    //loop through with each array value
    for (value of arr){
    // push into result if truthy
        if(value){
            result.push(value)
        }
    }
    return result
}

myBouncer(arr);

console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));


module.exports = myBouncer;
