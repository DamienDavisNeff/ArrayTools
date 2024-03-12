const  filterArray = (originalArray, differentArray) => {
    return originalArray.filter(element => differentArray.includes(element));
    // returns new array consisting of objects included in both arrays
}
const replaceObjects = (array,replace) => {
    var newArray = [];
    for(let a = 0; a < array.length; a++) {
        var currentItem = replace[array[a]];
        newArray.push(currentItem);
    } return newArray;
    // replaces all instances of an object in an array with another
}
const removeDuplicates = (array) => {
    var usedObjects = [];
    var newArray = [];
    for(let a = 0; a < array.length; a++) {
        if(!usedObjects.includes(array[a])) newArray.push(array[a]);
        usedObjects.push(array[a]);
    } return newArray;
    // self explained
    // removes duplicate objects from an array
    // ensuring theres only one of each
    // NOTE: This removes duplicate keys, no matter the value
}

module.exports = {
    filterArray,
    replaceObjects,
    removeDuplicates
}
