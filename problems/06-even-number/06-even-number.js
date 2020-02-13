/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    //if someNum & 1 give you a 1 then its an even number
    return (!(someNum&1))
}

for(let i = 0; i<10; ++i)
{
    console.log(isEven(i))
}