
// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function arrayOfStrings(stringArray = []){
     let newstringArray= stringArray.sort().reverse()
        newstringArray.forEach((item,index)=>{
        stringArray[index] = item.split("").reverse().sort((a,b) => a-b).join("")
    })
    return stringArray;
}

console.log(arrayOfStrings(["berissa", "kiwi", "pawpaw", "banana"]))


// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
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

// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
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


// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function employeePayments( employeeDataArray){
    return employeeDataArray.sort((a,b) => a.salary - b.salary);
};

 const result = employeePayments([{id:1, name: "Kaliza", salary: 200000}, {id:2, name: "jimmy", salary: 30000}, {id:3, name: "Ben", salary: 60000}])
 console.log(result)

//  Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.  
function numArray (arrayNumbers){
    arrayNumbers.forEach((num =>{
        console.log(num*2)
    }))
}
numArray([3,6,4,5,7,8])

