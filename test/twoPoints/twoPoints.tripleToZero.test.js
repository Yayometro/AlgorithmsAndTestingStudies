import { describe, it, expect } from "vitest";

// In one list you should find the triplets than together return in 0

function tripleToZero(arr){
    if(!Array.isArray(arr)) return "Arr is not an array"
    let target = 0
    let triplets = {}
    for (let i = 0; i < arr.length-1; i++) {
        let current = arr[i]
        let tempResult = findPair(arr, target, i )
        if(tempResult !== false){
            console.log(tempResult)
            if(arr.includes(target)){
                triplets[current] = [target, ...tempResult]
            }
        }
    }
    return triplets
}

function findPair(arr, target, starter){
    let ini = starter 
    let end = arr.length - 1
    while(ini !== end){
        let first = arr[ini]
        let ending = arr[end]
        let res = first + ending

        if(res === target) {
            return [first, ending]
        } 
        if (res < target){
            ini = ini + 1
        } else {
            end = end - 1
        }
    }
    return false
}

console.log(tripleToZero([-3, -2, -1, 0, 1, 2, 3]))
describe('tripleToZero', () => { 
    it("tripleToZero([-3, -2, -1, 0, 1, 2, 3], 0) should return --> ", () => {
       expect(tripleToZero([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual({ '-3': [ 0, -3, 3 ], '-2': [ 0, -2, 2 ], '-1': [ 0, -1, 1 ] })
    })
 })
 
 
