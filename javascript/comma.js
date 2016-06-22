//var places = "mississippi utah colorado washington"; to
// => var places = "mississippi, utah, colorado, and washington";

var places = "mississippi utah colorado washington";


function formatPlaces(str){
  var places = str.split(" ");
  var newStr = "";
  for(var i = 0; i < places.length; i++){
    if(i = places.length - 2){
      newStr += places + ", and ";
    } else if(i = places.length - 1){
      newStr += places[i];
    } else {
      newStr += places[i] + ", ";
    }
  }
  return newStr;
}
