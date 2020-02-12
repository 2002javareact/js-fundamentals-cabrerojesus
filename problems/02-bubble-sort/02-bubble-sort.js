/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {

    for(let i = 0; i < numArray.length-1; ++i)
    {
        for(let j = 0; j < numArray.length-i-1; ++j)
        {
            if(numArray[j] > numArray[j+1])
            {
                let temp = numArray[j]
                numArray[j] = numArray[j+1]
                numArray[j+1] = temp
            }        
        }
        console.log(numArray);    
    }  
}

let arr = [4,3,2,1]

bubbleSort(arr)

console.log(arr);
