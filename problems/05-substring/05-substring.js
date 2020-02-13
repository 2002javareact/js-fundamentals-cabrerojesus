/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(endIndex >= someStr.length || startIndex < 0)
    {
        throw new Error("index out of bounds")       
    }
    
    return someStr.substring(startIndex,endIndex)
}

console.log(substring("Hello", 0, 3))