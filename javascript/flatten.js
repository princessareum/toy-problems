// take array with possible nested arrays ; flatten it

var arr = [1, [2, 3, [4, 5], [6, [7]], 8], 9];

function flatten(arr){
  var newArr = [];
  if(Array.isArray(arr)){
    return (newArr).concat.apply(newArr, arr.map(flatten));
  }
  return arr;
}

console.log(flatten(arr));


//one line of code with ES6


const inOneLine = a => Array.isArray(a) ? [].concat(...a.map(inOneLine)) : a;

console.log(inOneLine(arr));
