import { describe, it, expect } from "vitest";

// how many elem

function findPair(arr, target){
    let ini = 0
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

// Cases:
//Input: [1,2,3,4,5] and target 7
// Output: [2,5]

// i: [1,6,8,9,10] target= 14
//Output: [6,8]

//Input: [1,2,3,4,5] and target 10
// Output: null



describe('findPair', () => { 
    it("twoPoints([1,2,3,4,5], 7) should return --> [2,5])", () => {
        expect(findPair([1,2,3,4,5], 7)).toStrictEqual([2,5])
    })
    it("twoPoints([1,6,8,9,10], 4) should return --> [6,8])", () => {
        expect(findPair([1,6,8,9,10], 14)).toStrictEqual([6,8])
    })
    it("twoPoints([1,2,3,4,5], 10) should return --> [6,8])", () => {
        expect(findPair([1,2,3,4,5], 10)).toBe(false)
    })
 })