import { describe, it, expect } from "vitest";

// Tienes que sacar el promedio
// array [1,3,2,0,-1,7,10], K=3 --> output = [2, 5/3, 1/3, 16/3]

// [1,2,3,4,5] k=3 --> output - [2,3,4]
// [1,3,2,6,-1,4,1,8,2] k=5 --> output - [2.2, 2.8, 2.4, 3.6, 2.8]

function avergaSubArray(array, k) {
  const result = [];
  for (let i = 0; i < array.length + 1 - k; i++) {
    let subArr = array.slice(i, i + k);
    let sum = subArr.reduce((acc, curr) => acc + curr, 0) / k;
    result.push(sum);
  }
  return result;
}

function avergaSubArrayImproved(array, k) {
  let result = [];
  for (let i = 0; i < array.length + 1 - k; i++) {
    let acc = 0;
    let start = i;
    while (start < i + k) {
      acc = acc + array[start];
      start++;
    }
    result.push(acc / k);
  }
  return result;
}

function avg_sub_arrays(arr, k) { // [1, 2, 3, 4, 5], 3
    const averages = [];
    let windowStart = 0, 
    windowSum = 0;
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) { // windowEnd = 0 --> 1 --> 2 
      windowSum += arr[windowEnd]; // windowSum = 1 --> 3  --> 6
  
      if (windowEnd >= k - 1) {
        // add the average of the current window to averages array
        averages.push(windowSum / k);
  
        // subtract the integer at the windowStart from windowSum
        windowSum -= arr[windowStart]; // 5 
  
        // move the window start one spot
        windowStart++;
      }
    }
  
    return averages;
  }
  

  // Find first sub array wich add is equal to goal
  // [1, 3, 2, 2, 4, 5] 
  //Find the subarray with the add is 6
  // [2,1,5,2,8] g is 7

function subArraySum(arr, goal) {
  let length
  for (let i = 0; i < arr.length; i++) {
    
  }
  return result;
}


function findTheMinSubArrayLength(arr, goal){
    let start = 0
    let acc = arr[0]
    let minLength = Infinity
   for(let end = 1; end < arr.length ; end++){
    acc = acc + arr[end]
        while(acc >= goal && start < end){
            minLength = Math.min(minLength, end - start + 1)
            acc = acc - arr[start]
            start++
        }
    }
    return minLength
}

// Primero creo mi variables: minLength, start, end, acc
// minLength = Infinity
// start = 0
// end = start + 1
// acc = 0
// for 
// while ? -> while(acc >= goal) ---> star++ && minLength 
// end++



// You have a string and a number
// string "acccpbbebi" and number 3
// Find the longest substring with at least 3 distinct characters

// "bbaaaaccd" --> 1 -- result 4 ---> it should result in --> [aaaa]
// "abcdefg" --> 10 -- result 7 ---> [abcdefg]

function longestSubstring(str, num) {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let hash = {};
  let count = 0;
  let maxSubstring = "";
  
  while (end < str.length) {
    let char = str[end];
    hash[char] = (hash[char] || 0) + 1;
    if (hash[char] === 1) {
      count++;
    }
    while (count > num) {
      let char = str[start];
      hash[char]--;
      if (hash[char] === 0) {
        count--;
      }
      start++;
    }
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      maxSubstring = str.substring(start, end + 1);
    }
    end++;
  }
  return maxSubstring;
}


function longestSubstringMy(str, num) {
  let start = 0;
  let end = 0;
  let hash = {};
  let count = 0;
  let maxSubstring = "";
  let subString = ""
  let subArray
  while (end < str.length){
    //With this I add the char in the hashmap and in the maxSubString
    let currentChar = str[end]
    if(!hash[currentChar]){
      hash[currentChar] = 1
    } else {
      hash[currentChar] = hash[currentChar] + 1
    }

    subArray = Object.values(hash)
    subString += `${str[end]}`

    if(subArray.length === num){
      maxSubstring = subString.length > maxSubstring.length ? subString : maxSubstring
    } else if (subArray.length > num){
      count = subArray.length
    }
    while(subArray.length > num){
      subArray = subArray.slice(1, subArray.length)
      
    }
    
    start = 0
    end++
  }
  return maxSubstring
}

console.log(longestSubstringMy("bbaaaaccd", 1))

console.log(longestSubstring("bbaaaaccd", 1))
console.log(longestSubstring("abcdefg", 10))

describe("avergaSubArray", () => {
  it("should return the average of the subarray", () => {
    expect(avergaSubArrayImproved([1, 3, 2, 0, -1, 7, 10], 3)).toStrictEqual([
      2, 1.6666666666666667, 0.3333333333333333, 2, 5.333333333333333,
    ]);
  });
  it("should return the average of the subarray", () => {
    expect(avergaSubArrayImproved([1, 2, 3, 4, 5], 3)).toStrictEqual([2, 3, 4]);
  });
    it("should return the average of the subarray", () => {
      expect(avergaSubArrayImproved([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)).toStrictEqual([
        2.2, 2.8, 2.4, 3.6, 2.8,
      ]);
    });
});

describe("findTheMinSubArrayLength", () => {
  it("should return 2", () => {
    expect(findTheMinSubArrayLength([1, 3, 2, 2, 4, 5], 6)).toBe(2)
  });
  it("should return 2", () => {
    expect(findTheMinSubArrayLength([2,1,5,2,8], 7)).toBe(2)
  });
});


