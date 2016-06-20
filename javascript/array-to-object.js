// Write a function takes in an array with words and turn them into following object:
//var array = ["I", "Feel", "Pretty"]
//{string: "I Feel Pretty", join: "IFeelPretty", count: 11, original:["I", "Feel", "Pretty"]}

var array = ["I", "Feel", "Pretty"];

function pretty(array){
  var together = array.join('');
  var string = array.join(' ');
  var count = together.length;
  return {string: string, join: together, count: count, original: array};
}

console.log(pretty(array));
