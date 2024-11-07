import { describe, expect, it } from "vitest";

// Found duplicates and found specific elements of some array.

// Exercise:
// [b,c,a,b,c] --> result: [a,b,c]

// Pseudocode:
// Stack - HashMap - For -
// First we need to iterate the array
// store the item to iterate in my hashmap, and maybe
// {a: 2, c: 1, b:3}
//

function removeTheDuplicate(arr) {
  if (!Array.isArray(arr)) return "Must be an array";
  let hashmap = {};
  let stack = [];
  let set = new Set(["b", "c", "a", "b", "c"]);

  for (let i = 0; i < arr.length; i++) {
    if (!hashmap[arr[i]]) {
      hashmap[arr[i]] = i;
    } else if (i > hashmap[arr[i]]) {
      hashmap[arr[i]] = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const slength = stack.length;
    if (slength > 0 && arr[i] < stack[slength - 1] && i < hashmap[arr[i]]) {
      stack.pop();
      i--;
    } else {
      stack.push(arr[i]);
    }
  }
  let result = stack.join(", ");
  console.log(result);
  return result;
}

// removeTheDuplicate(["b", "c", "a", "b", "c"]);

// let newClass = new Set(["b","c","a","b","c"])
// console.log(newClass)

// Excercise 2
// [] -> return an array, if I stop for instance in the index 3, I have ro say how many days left
//
//[73,74,75,71,69,72,76,73] --> Result: [1,1,4,2,1,1,0,0]

// 
// Primero creo mi stack, luego inicio la secuencia
// Se que si no hay un numero a un lado para comparar, entonces retorno 0 esto para el 73 al final del array
// luego el 76 se va a comparar con el 

function daysLeft(arr) {
  if (!Array.isArray(arr)) return "Must be an array";
  let stack = [];
  let result = new Array(arr.length - 1)
  for (let i = arr.length - 1; i >= 0; i--) {
    let currentNumber = arr[i]
    let followingNumber = stack[stack.length - 1]
    if(!followingNumber){
        stack.push(i)
        result[i] = 0
    } else if (currentNumber > arr[followingNumber]){
        stack.pop()
        i = i + 1
    } else if (currentNumber < arr[followingNumber]){
        stack.push(i)
        result[i] = followingNumber - i
    }
  }
  stack = []
  return result
}


daysLeft([73,74,75,71,69,72,76,73])

describe("Monotonic Stack ", () => {
  it("daysLeft function should return true", () => {
    expect(daysLeft([73,74,75,71,69,72,76,73])).toStrictEqual([1,1,4,2,1,1,0,0])
  });
});
