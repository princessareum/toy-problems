// Lists are data structures composed of nested objects, each containing a single value and a reference to the next object.
//
// Here's an example of a list in JavaScript:
// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
//
// Write a function listToArray that converts a list to an array, like this:
// [1, 2, 3]
//
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity,
// all values will be either numbers, strings, or Booleans.



var list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

var list2 = {
  value: "foo1",
  next: {
    value: "foo2",
    next: {
      value: "foo3",
      next: null
    }
  }
};

var list3 = {
  value: true,
  next: {
    value: false,
    next: {
      value: true,
      next: null
    }
  }
};


function showNums(list){
  var nums = [];
  for(var key1 in list){
    if(key1 === 'value'){
      nums.push(list[key1]);
    }
    for(var key2 in list[key1]){
      if(key2 === 'value'){
        nums.push(list[key1][key2]);
      }
      for(var key3 in list[key1][key2]){
        if(key3 === 'value'){
          nums.push(list[key1][key2][key3]);
        }
      }
    }
  }
  return nums;
}

console.log(showNums(list1));
console.log(showNums(list2));
console.log(showNums(list3));
