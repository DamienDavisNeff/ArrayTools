const  filterArray = (originalArray, differentArray) => {
    return originalArray.filter(element => differentArray.includes(element));
}
const replaceObjects = (array,replace) => {
  var newArray = [];
  for(let a = 0; a < array.length; a++) {
    var currentItem = replace[array[a]];
    newArray.push(currentItem);
  } return newArray;
}
const removeDuplicates = (array) => {
  var usedObjects = [];
  var newArray = [];
  for(let a = 0; a < array.length; a++) {
    if(!usedObjects.includes(array[a])) newArray.push(array[a]);
    usedObjects.push(array[a]);
  } return newArray;
}

module.exports = {
    filterArray,
    replaceObjects,
    removeDuplicates
}