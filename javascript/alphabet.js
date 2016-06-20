// write a functin that takes in a string, and returns that string with all
// its letters in alphabetal order. assume there will be no punctuation or
// numbers. example: `alphabet('hello')` // => 'ehllo'



function alphabet(str){
  return str.split('').sort().join('');
};



//test
var string = "hello";
console.log(alphabet(string));
