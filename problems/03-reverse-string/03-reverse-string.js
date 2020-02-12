/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let reversed = ""
    for(let i = someStr.length-1; i>=0;--i)
    {
        reversed += someStr.charAt(i)
    }
    return reversed
}

console.log(reverseStr('Harry'))

