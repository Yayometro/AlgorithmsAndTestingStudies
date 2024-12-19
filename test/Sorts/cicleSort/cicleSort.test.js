// Tengo que sortear los numeros con o a la N, y que no cree arr extra.
// [3,1,5,4,2] -- se trata de ordenar
// Cómo? -> Se hace un loop y en cada pasada debería de ordenar el numero iterado en su correcto orden.

import { describe, expect, it } from "vitest"

// n -> -1 --> indice = n - 1

function orderN(arr){
    let t = 0
    while(t < arr.length){
        let first = arr[t] // 5
        let newIndex = first - 1 // 4
        let second = arr[newIndex] // 3
        if(first !== second){
            arr[t] = second
            arr[newIndex] = first
        } else {
            t = t + 1
        }
    } 
    return arr
}

// now you have [4,0,3,1] a missing number, find it
// 1 - [4,0,3,1] -> 
// 2 - [4,0,3,1] --> [0,4,3,1]
// 3 - [0,4,1,3]

// [0, 1, 4, 3];

function orderArr(arr){
    if(!Array.isArray(arr)) return "Must be an array"
    let t = 0
    while(t < arr.length){
        let first = arr[t] // 4 change places with the 1 // 0 by 1 // 3
        let newIndex  = first
        let second = arr[newIndex]
        if(first !== second && first < arr.length){
            arr[t] = second
            arr[newIndex] = first
        } else {
            t = t + 1
        }
    }
    return findMissing(arr)
}

function findMissing(arr){
    if(!Array.isArray(arr)) return "Must be an array"
    let finded = undefined
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== i){
            finded = i
        } 
    }
    return finded === undefined ? arr.length : finded
}

// Given an arr of numbers positives and negatives, find the lowest positive number that is not in the arr.
// Algor should not be goher than On
// [3,0,-2,1,2] -> result: 4


// Start the simulation:
// [3, 0, -2, 1, 2] --> [1, 0, -2, 3, 2] || t=0 
// [1, 0, -2, 3, 2] --> [0, 1, -2, 3, 2] || t=0 
// [0, 1, -2, 3, 2] --> [0, 1, -2, 3, 2] || t=1
// [0, 1, -2, 3, 2] --> [0, 1, -2, 3, 2] || t=2
// [0, 1, -2, 3, 2] --> [0, 1, -2, 3, 2] || t=3
// [0, 1, -2, 3, 2] --> [0, 1, 2, 3, -2] || t=3
// result --> [0, 1, 2, 3, -2]

function findTheLowestPositive(arr){
    if(!Array.isArray(arr)) return "Must be an array"
    let t = 0;
    while(t < arr.length){
        let first =  arr[t], // 3
            newIndex  = first,
            second = arr[first]; // 1
        if(first !== second && first < arr.length && first >= 0){ // t = 0
            arr[t] = second
            arr[newIndex] = first
        } else {
            t = t + 1
        }
    }
    return findMissing(arr)
}
describe("CicleSort", () => {
    it("orderN should be true", () => {
        expect(orderN([3,1,5,4,2])).toStrictEqual([1,2,3,4,5])
        expect(orderN([2,6,4,3,1,5])).toStrictEqual([1,2,3,4,5,6])
        expect(orderN([1,5,6,4,3,2])).toStrictEqual([1,2,3,4,5,6])
    }) 
    it("orderArr should find the right number missing", () => {
        expect(orderArr([4,0,3,1])).toBe(2)
        expect(orderArr([8,3,5,2,4,6,0,1])).toBe(7)
        expect(orderArr([3,5,2,6,0,1])).toBe(4)
        expect(orderArr([3,5,2,4,0,1])).toBe(6)
    })
    it("findTheLowestPositive should be possitve always", () => {
        expect(findTheLowestPositive([3,0,-2,1,2])).toBe(4)
        //
        expect(findTheLowestPositive([-1, -7,-8,-3,1,5,4,2])).toBe(3)
        expect(findTheLowestPositive([3,2,5,1])).toBe(4)
    })
})


// 