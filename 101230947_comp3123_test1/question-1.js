// define an arrow function called lowerCaseWords that takes mixedArray as an input parameter array
const lowerCaseWords = (mixedArray) => {
    // return a promise
    return new Promise((resolve, reject) => {
        // check if mixedArray is a valid array of array datatype
        if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
            // filter out non-string values by using ES6 filter method
            // filter() will run on each element of mixedArray array
            const filteredArrayHavingOnlyStr = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string");

            // map the returned filtered out values to an array that has lowercased string by using ES6 map method
            // map() will run on each element of mixedArray array
            // toLowerCase will convert string to lowercase
            const mappedArrayOfLowerCaseStrings = filteredArrayHavingOnlyStr.map((eachItemOfFilterArr) =>
                eachItemOfFilterArr.toLowerCase()
            );

            // resolve with the array having lower case strings
            resolve(mappedArrayOfLowerCaseStrings);
        } else {
            // otherwise reject the promise with a message
            reject("Invalid array");
        }
    });
};

// define the mixedArray
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

// call the lowerCaseWords function
// prints: ['pizza', 'wings']
lowerCaseWords(mixedArray)
    .then((value) =>
        // print array values when promise resolved
        console.log(value)
    )
    .catch((error) =>
        // print error when promise rejected
        console.log(error)
    );