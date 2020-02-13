/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let reversed = ""
    for(let i = someStr.length-1; i>=0;--i)
    {
        reversed += someStr.charAt(i)
    }
    return someStr === reversed
}

function output(str)
{
    if(!(isPalindrome(str)))
    {
        return `${str} is not a palindrome.`
    }
    else
    {
        return `${str} is a palindrome.`
    }
}

console.log(output("pop"))
console.log(output("Jesus"))
