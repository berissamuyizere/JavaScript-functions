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
            // let result = item*8
            // return result
            console.log()
        }else(index >= arrayOfNumbers.length-2);{
            let result = item +5
            return result
        }
    })
}
numOperations([1,2,3,4,5,6,7])
