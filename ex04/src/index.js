monitorsListArray = ["Apple", "Peach", "Berry"];




function myMonitorsFunction(arr) {

  var newMonitorsList = [...arr];

  var monitorsList = [];



  for (var i = 0; i < arr.length; i++) {
    monitorsList.push([arr[i], i+1]);
  }

  return monitorsList;


}

myMonitorsFunction(monitorsListArray);

console.log(myMonitorsFunction(monitorsListArray));

module.exports = myMonitorsFunction;
