'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * 
 * identity: The identity function takes in a value and returns it unchanged
 * 
 * @param {*} value: the value going inside of identity
 * 
 * 
 * 
 * @returns {*}: returns the value unchanged
 */
 function identity(value){
     //returns value unchanged
     return value;
}
module.exports.identity = identity;


/**
 * 
 * typeOf: The typeOf function determines the typeOf value that is being input
 * 
 * @param {*} value: the value going inside of typeof
 * 
 * 
 * 
 * 
 * @returns {*}: returns the typeof value as a string
 */
 function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === 'string'){
        return 'string';
    } else if (Array.isArray(value)){
        return 'array';
    } else if (typeof value === 'undefined'){
        return 'undefined';
    } else if (typeof value === 'number'){
        return 'number';
    } else if (typeof value === 'boolean'){
        return 'boolean';
    } else if (value === null){
        return 'null';
    } else if (typeof value === 'function'){
        return 'function';
    } else if (value instanceof Date){
        return 'date';
    } else if (typeof value == 'object'){
        return 'object';
    }
} 
module.exports.typeOf = typeOf;


/**
 * 
 * first: The first function returns the first element in an array
 * 
 * @param: {Array} list: The array to test and return elements from
 * @param: {Number} value: The number to represent what amount of the array we return
 * 
 * 
 * 
 * 
 * 
 * @returns {Array or Number}: Returns an array literal if array is not array or returns the first element in the array if the number is not a number
 */
 function first(arr, num){
    //if array isn't array or  if numerical argument is not a positive number.
    if (!Array.isArray(arr) || num < 0){
       //Should return empty list
        return [];
        //else if it's not a number or not given or equal to 1 which would also grab the first value
    } else if (isNaN(num) || num === undefined || num === 1){
        return arr[0];
    }
    //otherwise return the first number items of array
    return arr.slice(0, num);
}
module.exports.first = first;


/**
 * 
 * last: The last function returns the last element in an array
 * 
 * @param {Array} list: The array we look through to return the last element
 * @param {Number} value: The number to represent what amount of the array we return 
 * 
 * 
 * 
 * 
 * 
 * @returns {*} value: The last element in the array
 */
 function last(arr, num){
    if (!Array.isArray(arr) || num < 0){
       //Should return empty list
        return [];
        //else if it's not a number or not given 
    } else if (isNaN(num) || num === undefined || num === 100){
        return arr[arr.length - 1];
    }
    //otherwise return the last number items of array
    return arr.slice(Math.max(arr.length - num, 0));
}
module.exports.last = last;

/**
 * 
 * indexOf: The indexOf function returns the index of the value input into the function
 * 
 * @param {Array} list: The array we sift through to detect a value 
 * @param {*} value: The value we use to get its index in the array
 * 
 * 
 * 
 * 
 * 
 * @returns {Number} value: The number that represents the index of the value
 */
 function indexOf(arr, val){
    //working with index so need to loop
    for (let i = 0; i < arr.length; i++){
        //if arr at this index equals val
        if (arr[i] === val){
            //return the index
           return i; 
           //else if the array doesn't include val 
        } else if (!arr.includes(val)){
            //return -1
        return -1;
    }
}
}
module.exports.indexOf = indexOf;

/**
 * 
 * contains: The contains function is designed to check if a value is located in an array
 * 
 * @param {Array} list: The array we look through to see if it contains a value
 * @param {*} value: The value we check for in the array
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * @returns {Boolean} : Returns true or false depending on the array and val passed in
 */
 function contains(array, value){
    //return true if the array includes the value otherwise false 
    return (array.includes(value) ? true : false);
}
module.exports.contains = contains;

/**
 * 
 * unique: The unique function is designed to take in an array and return a new array with only unique data
 * 
 * @param {Array} list: The array we take in to sift through and find duplicates
 * 
 * 
 * 
 * 
 * 
 * 
 * @returns {Array} list: Returns an array with all duplicates removed
 */
 function unique(array){
    /*
    what I was attempting to do
    _.filter(array, function(element, index){
        return _.indexOf(array, element) === index;
    });
    */
    //NOTE: COULD NOT GET THIS TO WORK WITHOUT ARROW FUNCTIONS
    return array.filter((element, index) => array.indexOf(element) === index);
}
module.exports.unique = unique;

/**
 * 
 * filter: The filter function is designed to take in an array and return a new array filtered by the test function parameter
 * 
 * @param {Array} list: The array we look through to filter
 * @param {Function} action: The function that decides which data goes into the filtered array
 * 
 * 
 * 
 * 
 * @returns {Array} list: returns an array with all the filtered data
 */
 function filter(array, testFunc) {
    //create an array to put filtered elements into
    let filteredArr = [];
    //for each element in array call the function passing in those 3 parameters
    each(array, function(ele, index, array){
        //if those parameters return true with the test func push the element into the filtered array
        if (testFunc(ele, index, array)){
            filteredArr.push(ele);
        }
    });
    return filteredArr;
}
module.exports.filter = filter;

/**
 * 
 * reject: The reject function is designed to take in an array and return an array with all variables rejected by the test function
 * 
 * @param {Array} list: The array we take in to test against the function
 * @param {Function} action: The function that decides which data goes into the return array
 * 
 * 
 * 
 * @returns {Array} list: return an array with all the rejected data
 */
 function reject(array, testFunc) {
    let filteredArr = [];
    each(array, function(ele, index, array){
        if (!testFunc(ele, index, array)){
            filteredArr.push(ele);
        }
    });
    return filteredArr;
}
module.exports.reject = reject;

/**
 * 
 * partition: The partition function to split one array into two arrays within an array; the two arrays are separated by their result made by the function
 * 
 * @param {Array} list: The array we sift through to partition
 * @param {Function} action: The action that determines a truthy or falsey value 
 * 
 * 
 * 
 * 
 * 
 * @returns {Array} list: returns the partitioned list with the separated arrays
 */
 function partition(array, func){
    //create three arrays in which you will push the elements based on the func
    //final array containing the split array
        var arraysSplit = [];
        //original array items that pass the function test go in this array
        var passedArray = [];
        //original array items that fail the test go in this array
        var failedArray = [];
        //call the function for each element in array passing the 3 arguments
    each(array, function(ele, key, array){
        //if the test func passes the parameters
        if (func(ele, key, array)){
            //if they pass push here
            passedArray.push(ele);
        } else {
            //otherwise push here
            failedArray.push(ele);
        }
    });
    //finally push those into arraysSplit in proper order and return it
    arraysSplit.push(passedArray);
    arraysSplit.push(failedArray);
    return arraysSplit;
}
module.exports.partition = partition;

/**
 * 
 * map: The map function produces an array of the same length with modified values contingent on the function
 * 
 * @param {Collection} list or description: The array or object we sift through to modify certain values
 * @param {Function} action: The function that commits the action of modifying the original array
 * 
 * 
 * 
 * 
 * @returns {Array or Object} list or description: returns an array that is modified from the original
 */
 function map(collection, action){
    let finalArr = [];
      if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            finalArr.push(action(collection[i], i, collection));
        }
    } else {
        for (var key in collection) {
           finalArr.push(action(collection[key], key, collection));
        }
    }
    return finalArr;
}
module.exports.map = map;

/**
 * 
 * pluck: The pluck function is designed to look through an array of objects and pluck out the values presented on the property parameter
 * 
 * @param {Array} list: The array of objects we sift through to do some plucking
 * @param {Property} key-value: The property value we reference on the object to get our plucked array of values
 * 
 * 
 * 
 * 
 * 
 * 
 * @returns {Array} list: returns property values from the array of objects
 */
 function pluck(array, property){
    //map returns an array so no need for array literal
    //using map, map thru array and call a function the individual objects within and return there property into the mapped array
   return map(array, function(object){
        return object[property];
    });
    //map returns an array don't need to return at the end
}
module.exports.pluck = pluck;

/**
 * 
 * every: The every function is designed to take in a collection and test via a function if every(so if one false then result is false) element is true or false returns the former or latter based on the results
 * 
 * @param {Collection} list or description: The collection we take in in order to test the elements within it
 * @param {Function} action: The function that determines the truthiness or falsiness of every element
 * 
 * 
 * 
 * 
 * 
 * 
 * @returns {Boolean} : returns a boolean based on whether every element in the collection was true or false when tested against the function
 */
 function every(collection, action){
    //if the function is provided//this edge case is BRUTAL
    if (action) {
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                //if even one of them returns false then return false otherwise they all returned true ***EVERY one of them
                if (!action(collection[i], i, collection)) {
                    return false;
                }
            }
            //if the return value of calling action or function on every element is true then return true
            return true;
        } else {
            //checking for if it's an object same logic tho 
            for (var key in collection){
                if (!action(collection[key], key, collection)) {
                    return false;
                }
            }
            return true;
        }
        //else no function was provided
    } else {
       if (Array.isArray(collection)) {
           for (let j = 0; j < collection.length; j++) {
               if (!collection[j]){
                   return false;
               }
           }
           return true;
       }
    }
}
module.exports.every = every;

/**
 * 
 * some: The some function is designed to test elements in a collection and return true if any element passes the function otherwise false
 * 
 * @param {Collection} list or description: The collection we take in in order to test the elements within it
 * @param {Function} action: The function that test every element and determines if any are true
 * 
 * 
 * 
 * 
 * 
 * 
 * @returns {Boolean} : returns true if any of the elements in the collection pass the function otherwise returns false 
 */
 function some(collection, action){
     if (action) {
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                //if even one of them returns false then return false otherwise they all returned true ***EVERY one of them
                if (action(collection[i], i, collection)) {
                    return true;
                }
            }
            //if the return value of calling action or function on every element is true then return true
            return false;
        } else {
            //checking for if it's an object same logic tho 
            for (var key in collection){
                if (action(collection[key], key, collection)) {
                    return true;
                }
            }
            return false;
        }
        //else no function was provided
    } else {
       if (Array.isArray(collection)) {
           for (let j = 0; j < collection.length; j++) {
               if (collection[j]){
                   return true;
               }
           }
           return false;
       }
    }
}
module.exports.some = some;

/**
 * 
 * reduce: The reduce function is designed to take in 
 * 
 * @param {Array} list: The array we look through in order to reduce the elements 
 * @param {Function} action: The function that we pass the elements through in order to accumulate them 
 * @param {Seed} accumulator: The optional parameter that is designed to accumulate the elements depending on their datatype
 * 
 * 
 * 
 * 
 * 
 * @returns {*} value: Returns a single value that's an accumulation of all the elements in the array 
 */
 function reduce(array, action, seed){
    //if seed is given or person passes in seed
    if (seed !== undefined){
        //then the result will accumulate in the seed
        let result = seed;
        each(array, function(element, index, array){
        
            result = action(result, element, index);
        });
        //return the acumulated seed
        return result;
    } else {
        //if no seed is given use the first element in the array as the seed or result
        let result = array[0];
        each(array, function(element, index, array){
            //every index except zero since it has taken the place of the starting result
            if (index !== 0){
                //we add array since the first element isn't accumulating inside of anything
        result = action(result, element, index, array);
            }
        });
        return result;
    }
}
module.exports.reduce = reduce;

/**
 * 
 * extend: The extend function is designed to copy one object's propeties and transfer this data to a source object
 * 
 * @param {Object} description: The object in which all object's properties will be copied to
 * @param {Object} description: The object in which we take the properties and copy them to the first object
 * 
 * 
 * 
 * 
 * 
 * @returns {Object} description: returns the first object updated will all properties
 */
 function extend(...obj){
    //Object.assign copies properties from one to another and the spread operator will apply them to the function
   return Object.assign(...obj);
}
module.exports.extend = extend;