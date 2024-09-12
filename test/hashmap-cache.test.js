import { describe, it, expect } from "vitest";

//adrian dainar
// "listen" and "silent"
// "funeral" and "realfun"

// first I do a cache
// iterate for each char of the string and store the values as unique in the cache
// Then iterate in the sec string comparing with the fist one using the cache
// What if the car does not exist or is in the first cache? --> return false.
// Then I areturn a true as default
// When the length of the string is < or > is false by default.


function anagram(strOne, strTwo){
    let result = true
    const hashMap = {};
    if(strOne.length !== strTwo.length) return false
    for(let i = 0; i < strOne.length ; i++){
        if(!hashMap[strOne[i]]){
            hashMap[strOne[i]] = strOne[i]
        }
    }
    for(let i = 0; i < strTwo.length ; i++){
        if(!hashMap[strTwo[i]]){
            result = false
        }
    }
    return result
}

// Y have two arr and yuo should find the intersection of both arrays
// 
let set = new Set("aaaabbbcv")
let mapp = new Map()
mapp.set("pepe", "persona")
console.log(set)
console.log(mapp)

function intersection(arrOne, arrTwo){
    if(!Array.isArray(arrOne) || !Array.isArray(arrOne)) return "Arg should be arrays"
    let result = []
    const tempOne = new Set(arrOne)
    const tempTwo = new Set(arrTwo)
    console.log(tempOne)
    console.log(tempTwo)
    tempTwo.forEach(n => tempOne.has(n) ? result.push(n) : false)
    return result.sort((a, b) => a - b)
}
// [1, 2, 2, 1], [2, 2]
// [4, 9, 5], [9, 4, 9, 8, 4]


// Review what is the consecutive secuency most large inside the array of sensecutive numbers

// []


// console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // Output: 4
// console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9

// set to reduce duplicates.
// Save them in hashMaps 
// Sort them.
// [1,2,3,4,100,200] --> 4
// current 1 --> +1 --> acc = 1
// current 4 + 1 --> 5 ? [] --> continue iteration : current = 4

// for -> 1 + 1 --> 2 buscar en [] ? current 2 : nadota
// for --> 3 + 1 ---> 4 este en [] ? current a 4 : nadota


function longestConsecutiveSequence(arr){
    if(!Array.isArray(arr)) return "Arg should be arrays"
    if(arr.length === 0 || arr.length === 1) return false
    const uniqueArr = new Set(arr)
    const arrSorted = []
    uniqueArr.forEach(n => arrSorted.push(n))
    arrSorted.sort((a,b) => a - b)
    let current = 1
    arrSorted.forEach(n => uniqueArr.has(n + 1) ? current = current + 1 : "nadota")
    return current
}

describe("anagram", () => {
  it("The function should return false if the lengths of both strings are unequal", () => {
    expect(anagram("adrians", "dainar")).toBe(false)
  })  
  it("The function should return false if the lengths of both strings are unequal", () => {
    expect(anagram("adriaw", "dainar")).toBe(false)
  })  
  it("The function anagram it should return true when the first and sec arguments are 'adrian' and 'dainar'", () => {
    expect(anagram("adrian", "dainar")).toBe(true)
  })  
  it("The function intersaction it should return [2], when the arguments are [1, 2, 2, 1], [2, 2]", () => {
    // expect(intersection([1, 2, 2, 1], [2, 2])).toStrictEqual([2])
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toStrictEqual([4,9])
  })  
  it("The function longestConsecutiveSequence([100, 4, 200, 1, 3, 2]) it should return 4", () => {
    expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4)
    expect(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9)
  })  
  it("The function longestConsecutiveSequence([]) it should return false", () => {
    expect(longestConsecutiveSequence([])).toBe(false)
  })  
  it("The function longestConsecutiveSequence([1]) it should return false", () => {
    expect(longestConsecutiveSequence([1])).toBe(false)
  })  
})