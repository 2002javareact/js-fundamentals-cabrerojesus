/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    let total = 1

    for(let i = sumNum; i>0;--i)
    {
        total *= i
    }
    return total
}

console.log(factorial(4))