import { describe, it, expect } from "vitest";
import _ from "lodash"










// Cases:
// [1,4] [7, 9] [2, 5] ---> [1,5] [7,9]
// [6,7] [2,4] [5,9] ---> [2,4]  [5,9]
// [1,4] [2,6] [3,5] ----> [1,6] --> [[1,2,4,6], [3,5]] --> [[1,2,3,4,5,6]]

// Cases:
// [1,4] [7, 9] [2, 5] -> [1,4], [2, 5], [7, 9] ---> First I order the arr
// The start and empty array and substract the first element ---> [1,4]
// Start a while with the condition that will run until the stack has les than 1 element
// Then I select the last element of the result (because it has to be dynamic) and store it temp in some var
// I also save the first element of the stack --- neeed it to be compared after
// in the first iteration the 4 (first[first.length]) is lower than 2 (second[0]) that means that this sub-arrays are not matching, but this is not the case in this comparison,
// So becaise the 4 is grater than 2, the sub-arrays will be merged into one with the first element perfectly definned, since the arrays were ordered and the most grater num betwen the end of two sub-arr
// the result of result is then [1, 5]
// And the after this first iteration the stack only has the [7, 9] sub-array
// Then the process repit itself but in the comparison, the numbers are not matching that means the stack will be empty and the two arrays [1,5] and [7,9] will be pushed in the result array

function mergeArray(arr){
    if(!Array.isArray(arr)) return "Must be an array"
    const stack = arr.sort((a, b) => a[0] - b[0])
    const result = [stack.shift()] // [1,3] // 2da [1,3], [4,6], // 

    while(stack.length >= 1 ){
        // Hay que ver que tengan numeros en comun
        // Si los tienen merge
        // Si no los tienen, se expulsa el sub array ultimo
        // Deben de estar solo los sub-arrays que tengan numeros en comun
        const first = result.pop() // [1,3] // 2da iteracion -> [4,6]
        const second = stack.shift()// [4,6] --  2da - [7,9]
        
        if (first[first.length - 1] < second[0]) {
            result.push(first)
            result.push(second)
        } else {
            result.push([first[0], Math.max(first[first.length - 1], second[second.length - 1])]);

        }
    }
    return result
}


mergeArray([[1,4], [7, 9], [2, 5]])
    
// Dado una lista de trabajos cada uno con su tiempo de inicio, su tiempo de fin y su carga de CPU (cuando corre), encuentra el máximo de la carga del CPU en cualquier momento si todos los trabajos estan corriendo en la misma maquina:
// trabajos: [{start:1, end:4, load:3}, {start:2, end:5, load:4}, {start:7, end:9, load:6}] --> RESULT 7 
// trabajos: [{start:6, end:7, load:10}, {start:2, end:4, load:11}, {start:8, end:12, load:15}] --> RESULT 15
// trabajos: [{start:1, end:4, load:2}, {start:2, end:4, load:1}, {start:3, end:6, load:5}] --> RESULT 8 

// No programatic:
// Firs I need to order the elements based on the start property
// And separate the elements being prepared to be merged, that means separate the first obj to be compared with the second element
// This means compare the first element first property with the second element in the stack end property, to know if they match on time.
// After comparison merge if the elements match and save the accumulation of load of both process and store it 
// IF the elements doesn't match then they are not merged and each load is compared with the highest load value stored
// Then the same process is repited until no elements in the array

// Pre-code prgramatic:
// Order input arr
// create and store in the stack all the elements that need to be proccess and remove from the queu
// create a var for the higestLoad and for the postMergedArr
// Start a while that will runs only if the stack has elements inside
// Inside we created two var to store the value of the elements that will be proccess and then
// Create a comparison when we pushed in the arr preResult or mergen the elements and update the maxLoad

function maximunChargeFinder(arr){
    if(!Array.isArray(arr)) return "Must be an array"
    const stack = arr.sort((a, b) => a.start - b.start)
    let maxLoad = 0
    const preResult = [stack.shift()]
    while(stack.length >= 1){
        const first = preResult.pop()
        const second = stack.shift()

        if(first.end < second.start){
            let maxTemp = Math.max(first.load, second.load)
            maxLoad = maxLoad > maxTemp ? maxLoad : maxTemp
            preResult.push(first)
            preResult.push(second)
        } else {
            let mergedItem = {start: first.start, end: Math.max(first.end, second.end), load: first.load + second.load}
            preResult.push(mergedItem)
            maxLoad = maxLoad > mergedItem.load ? maxLoad : mergedItem.load
        }
    }
    return maxLoad
}

// we have an array of arrays that represent the hours that works an employee and you have to find the interval of hours that employees have in common (the launch time)
// Each array is a employee
// [ [[1,3], [5,6]], [[2,3], [6,8]]  ] -----> [3,5]
// [ [1,3], [2,3], [5,6], [6,8]]

function findLaunchInCommon(arr){
    if(!Array.isArray(arr)) return "Must be an array"
    const newflat = _.flatten(arr)
    const stack = newflat.sort((a, b) => a[0] - b[0])
    const mergedArr = [stack.shift()];
    let result = []
    let commonHrs = 0
    while(stack.length >= 1){
        const first = mergedArr.pop();
        const second = stack.shift();
        const [Astart, Aend] = first
        const [Bstart, Bend] = second
        if(Aend < Bstart){
            mergedArr.push(first)
            mergedArr.push(second)
        } else {
            mergedArr.push([Astart, Math.max(Aend, Bend)])
        }
    }
    result = mergedArr.map((e, i, arr) => {
        if(arr.length - 2){
            let [fFirst, fLast] = e 
            let [sFirst, sLast] = e[i+1]
        }
        
    })
    console.log(mergedArr)
    return commonHrs
}
findLaunchInCommon([ [[1,3], [5,6]], [[2,3], [6,8]]  ])
// [ [[1,3], [5,6]], [[2,3], [6,8]]  ]
// [ [1,3], [2,3], [5,6], [6,8]]
// in result --> 1ra Iteration -> [1,3]
// 2da in result --> [1,3], [5,6]
// 3ra iteration --> [[1,3], [5,8]] - [9, 10]
// Stack is empty in 4rt iteration and 
describe("mergeArray", () => {
    it("mergeArray should be true", () => {
        expect(mergeArray([[1,4], [7, 9], [2, 5]])).toStrictEqual([[1,5], [7,9]])
        expect(mergeArray([[6,7], [2,4], [5,9]])).toStrictEqual([[2,4], [5,9]])
    })
    it("maximunChargeFinder should return true in all the scenarios", ()=> {
        expect(maximunChargeFinder([{start:6, end:7, load:10}, {start:2, end:4, load:11}, {start:8, end:12, load:15}])).toBe(15)
        expect(maximunChargeFinder([{start:1, end:4, load:3}, {start:2, end:5, load:4}, {start:7, end:9, load:6}])).toBe(7)
        expect(maximunChargeFinder([{start:1, end:4, load:2}, {start:2, end:4, load:1}, {start:3, end:6, load:5}])).toBe(8)
    })
})

