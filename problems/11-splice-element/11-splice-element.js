/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let newArr = []
    for(let i = 0; i<someArr.length;++i)
    {
        if(i != index)
        {
            newArr.push(someArr[i])
        }
    }     
    return newArr
}

console.log(spliceElement([1,2,3,4,5],1))
