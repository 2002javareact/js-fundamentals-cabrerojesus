/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let arr = []
    
    if(n === 1)
    {
        return 0
    }
    
    else if(n === 2)
    {
        return 1
    }
    
    else
    {
        arr.push(0)
        arr.push(1)
        
        for(let i = 0; i < n-2; ++i)
        {
            arr.push(arr[i] + arr[i+1])
        }
        return arr[n-1]
    }
     
    }
    
    for(let i = 1; i < 20; ++i)
    {
        console.log(fib(i));    
    }