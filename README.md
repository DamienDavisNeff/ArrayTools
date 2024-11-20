# ArrayTools
A custom node library that allows me to do various things with arrays, such as filtering, replacing, and removing duplicates in arrays.

## Use
1. Download `index.js` and put it in a folder named something like `ArrayTools`
2. Use the following code
```js
const ArrayTools = require('../ArrayTools.js');


ArrayTools.filterArray(originalArray,differentArray);
// Returns new array with objects in both original arrays
ArrayTools.replaceObjects(originalArray,reaplaceArray);
// Returns a new array with values replaced based on a mapping object
ArrayTools.removeDuplicates(array);
// Returns a new array with duplicate keys removed (does not check values, keeping the first instance of each key)
```

### replaceObjects
Looking through my old repositories, it took me a second to realize what this code did, so here's a brief explanation and example. 
```js
const replaceObjects = (array,replace) => {
    var newArray = [];
    for(let a = 0; a < array.length; a++) {
        var currentItem = replace[array[a]];
        newArray.push(currentItem);
    } return newArray;
}
```
*Input:*
* `array`: An existing array of items
* `replace`: A JSON object that contains the values from `array` as keys.

*Steps:*
1. Creates a new array (`newArray`) 
```js
var newArray = [];
```
2. Loops through values in `array`
```js
for(let a = 0; a < array.length; a++)
```
3. Uses those values as a key in `replace` 
```js
var currentItem = replace[array[a]];
```
5. Takes the values that aligns with the corresponding key in `replace` and adds it into the `newArray`
```js
newArray.push(currentItem);
```
6. Returns `newAray`
```js
return newArray;
```

*Example:*
```js
let array = ["a","b","c"];
let replace = {"a":1,"b":2,"c":3}

let output = arrayTools.replaceObjects(array,replace);
console.log(output);
```
```js
newArray = [1, 2, 3]
```
