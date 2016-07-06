var values = ['something', 1011, undefined, 0, true, null, 'foo', {name:'foo'}];

var types = {
  objects: 0,
  numbers: 0,
  strings: 0,
  booleans: 0,
  bad: 0
};

//create a loop that iterates through the above array and fills in the types object with the sum of the values in the array that match that type.

//expected output:
// {objects: 1, numbers: 2, strings: 2, booleans: 1, bad: 2}

function typer(arr){
  var types = {
    objects: 0,
    numbers: 0,
    strings: 0,
    booleans: 0,
    bad: 0
  };
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] === "number"){
      types.numbers += 1;
    } else if(typeof arr[i] === "object" && arr[i] !== null){
      //some reason, null is also counted as object!
      //so in order to make sure null is not part of object, i added another condition
      //to make sure it is not equal to null.
      types.objects += 1;
    } else if (typeof arr[i] === "string"){
      types.strings += 1;
    } else if (typeof arr[i] === "boolean"){
      types.booleans += 1;
    } else {
      types.bad += 1;
    }
  }
  return types;
}

console.log(typer(values));
