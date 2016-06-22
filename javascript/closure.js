//make a function that returns array of functions console log numbers on the array.
// var arr = [0, 1, 2, 3, 4, 5];
// var funcArr = [func0, func1, func2 ... etc];
//funcArr[0] -> console logs 0
//functArr[1] -> console logs 1 etc...

var arr = [0, 1, 2, 3, 4, 5];


function closure(val){
  return function(){
    console.log(val);
  };
}

function makeFunc(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr.push(closure(arr[i]));
  }
  return newArr;
}
