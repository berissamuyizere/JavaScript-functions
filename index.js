function arrayOfStrings(stringArray = []){
     let newstringArray= stringArray.sort().reverse()
        newstringArray.forEach((item,index)=>{
        stringArray[index] = item.split("").reverse().sort((a,b) => a-b).join("")
    })
    return stringArray;
}

console.log(arrayOfStrings(["berissa", "kiwi", "pawpaw", "banana"]))


function numOperations( arrayOfNumbers){
    arrayOfNumbers.forEach((item, index) =>{
        if(index < 4){
            console.log(`${item *8}`)
        }else if(index >= arrayOfNumbers.length-2);{
            console.log(`${item+ 5}`)
            
        }
    })
}
numOperations([1,2,3,4,5,6,7])


function numbers(nums){
    nums.filter(( num => {
        if(num > 0){
            console.log("positive")
        } else{
            console.log("negative")
        }
    }))
}
numbers([1,3,2,4,5,6,-6,-8])

    

