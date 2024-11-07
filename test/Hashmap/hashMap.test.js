import { describe, it, expect } from "vitest";

/* 
Problema: 
Dado un array de enteros y un valor objetivo, encuentra si existen dos números en el array cuya suma sea igual al valor objetivo. 
Debes resolverlo en tiempo lineal usando un HashMap.
*/

// Se me pide que dado un array de numeros enteros --> [2, 7, 11, 15]
// I should find 2 numbers of this array wich sum has to be the target value 9.
// It should be in lineal time.
// So here mi thoung about it is I should test the possible combinations
// for instance one number than compare it with the other ones, can return me the expeceted cobination.
// for instance I can take a recursive function called SumingPares and
//Where i set my argument as an array as well as hashMap arg and current argument
//This function is first initialized with
// sumingPar([2, 7, 11, 15], {}, 0)
// inside the function I have to set mi base case, which in this case  think is when the
// I can tace a current numberOne and current numberTwo and compare them with some sum and make a comparison, if they are already in the hashMap and sum 14, then just return the result
// But if they don't return that and they are not in the hashmap, add them and add one to the accumulator
// So here it should have another condition to review that the following number is more than the arr.lenth the, the process shoud stop.
// So for instance, in the first iteracion after review that the current and nextOne are not surpasing the arr.length
// Then I should start to see with another condition if arr[0] and arr[1] --> 2 and 7 --> are in the cache? hashmap[`2+7`] if yes see if they are the answer and return it.
// IF not, then, add this combination to the hashmap and go with the next one
//Until you find the first combinaton.
//QUestions:
// How I'll handle the iteration of the arr.length? ---> with for, with acc

function addingTwo(arr, result) {
  if (Array.isArray(arr)) {
    const cache = {};
    let iterator = 0;
    while (iterator < arr.length) {
      testAdd(arr[iterator], 0);
      iterator = iterator + 1;
    }
    function testAdd(n) {
      let acc = 0;
      while (acc < arr.length) {
        if (n !== arr[acc]) {
          if (n + arr[acc] === result) {
            if (!cache[`${n}+${arr[acc]}`] || !cache[`${arr[acc]}+${n}`]) {
              cache[`${n}+${arr[acc]}`] = [n, arr[acc]];
            }
          }
        }
        acc += 1;
      }
    }
    return cache;
  } else {
    throw Error(
      "Arguments must be array, object and numeric value. To start the function"
    );
  }
}
// 9
// Variacion
// Es hacer lo mismo que antes, pero te vas a detener cuando encuentres el resultado en lugar de estar iterando en cada ocacion

function findOneReturnTwo(arr, res) {
  const cache = {};
  let i = 0;
  let finalResult = -1;
  while (i < arr.length) {
    finalResult = findInner(0, 1);
    i = i + 1;
  }
  function findInner(acc, next) {
    if (acc === arr.length) {
      return finalResult;
      // Here I'm telling that ther's no result.
    }
    if (
      cache[`${arr[acc]}+${arr[next]}`] ||
      cache[`${arr[next]}+${arr[acc]}`]
    ) {
      return (
        cache[`${arr[acc]}+${arr[next]}`] || cache[`${arr[next]}+${arr[acc]}`]
      );
    } else {
      if (arr[acc] + arr[next] === res) {
        cache[`${arr[acc]}+${arr[next]}`] = [arr[acc], arr[next]];
        return [arr[acc], arr[next]];
      }
    }
    return findInner(acc + 1, next + 1);
  }
  return finalResult;
}
// console.log(findOneReturnTwo([2, 7, 11, 15], 9))
// Even if this last code can find the result, it adds extra layers of unnacesary complaxity.

//

// Here is the BEST inplementation ***************************************************************************
function findOneReturnTwoOptimized(arr, res) {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = res - arr[i]; // You first set the diff to reach the result
    if (cache[complement] !== undefined) {
      return [complement, arr[i]];
    }
    // If not, just add it, please:
    cache[arr[i]] = i;
  }
  return -1;
}
// console.log(findOneReturnTwo([2, 7, 11, 15], 9));

// Tengo que dar un resultado, pero con la condición de que le dé la menor cantidad de billetes y aque además sea la menor conbinaciónes.
// Como testeo cual es la mejor conbinación? Tengo que compar --> que comparo? ---> como almaceno las
// 10, 6, 1 ---> result -> 12

// Primero creo una funcion, creo un cache, creo una funcion iteradora.
//La funcion iterador va a revisar numero por numero y los va a comparar para darse cuenta, cuales conbinacones me dan como resultado el numero 12
// Quiere decir que cada elemento del array se le aplica una funcion iterativa que va a comparar este elemento con el de los demás.
// En la función recursiva, se va a comparar

function monopoly(arr, goal) {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    let temp = posibilityChecker(goal - arr[i], arr, [], arr[i]);
    // let temp = posibilityChecker(goal,arr, [])
    if (!cache[arr[i]]) {
      cache[arr[i]] = temp;
    }
  }
  function posibilityChecker(n, copy, res, wichIteration) {
    // console.log("n", n)
    if (copy.length === 0) {
      return res;
    }
    //   if(n > 0){
    //     // console.log("n adentro de  n > 0", n)
    //     // console.log("copy adentro", copy)
    //     // console.log("res", res)
    //     res = [...res, copy[0]]
    //     // console.log("re after", res)
    //     // console.log("n after")
    //   //  posibilityChecker(n - copy[0], copy, [...res, copy[0]]);
    //   }
    //   else {
    //    copy = copy.slice(1, copy.length);
    //   //  return posibilityChecker(n , copy, res);
    // }
    // let tempRes = res
    // res = [...res, copy[0]]
    // if(n < 0){
    //   copy = copy.slice(1, copy.length);
    //   res = tempRes
    // }
    console.log("Current scenario: ", wichIteration);
    console.log("n final", n);
    console.log("copy final", copy);
    console.log("res", res);
    return posibilityChecker(
      n - copy[0],
      n < 0 ? copy.slice(1, copy.length) : copy,
      n < 0 ? res : [...res, copy[0]],
      wichIteration
    );
  }
  return cache;
}
console.log(monopoly([10, 6, 1], 12));

// posibilityChecker(12-10=2, [10,6,1] []) --> se hace resta 12 - 10 = 2 --> luego se compara 2 > 0 ->> se hace un cambio en res y se agrega 10
// posibilityChecker(12-10=2, [10,6,1] []) --> se hace resta 12 - 10 = 2 --> luego se compara 2 > 0 ->> se hace un cambio en res y se agrega 10

//posibilityChecker(12, 10, []) --> 12-10= 2 --> 2 < 0 = return(2, [10,6,1],[])
//posibilityChecker(2, [10,6,1],[]) --> 2-10= -8 --> -8 < 0 = return(-8, [6,1],[])
//posibilityChecker(-8, [6,1],[]) --> -8-6= -14 --> -8 < 0 = return(-8, [6,1],[])

// posibilityChecker(12-10=2,[10,6,1],[]) --> 2<-0 -> is bigger so res = [10]
// posibilityChecker(2-10=-8,[10,6,1],[10]) --> -8<-0 -> removes -> cop = [6,1]
// posibilityChecker(2-6=-4,[6,1],[10]) --> -4<-0 -> removes -> cop = [1]
// posibilityChecker(2-1=1,[1],[10]) --> 1<-0 ->  ignores and -> res = [10,1]
// posibilityChecker(1-1=0,[1],[10,1]) --> 0<-0 -> ignores -> res = [10,1,1]
// posibilityChecker(0-1=-1,[1],[10,1]) --> 0<-0 -> base case and return -> res = [10,1,1]

function monopolyi(arr, goal) {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    let temp = posibilityCheckery(goal, arr[i], [goal, ...arr], []);
    // let temp = posibilityChecker(goal,arr, [])
    if (!cache[arr[i]]) {
      cache[arr[i]] = temp;
    }
  }
  function posibilityCheckery(goale, current, copyArray, res) {
    if(goale - current === 0){
      return res
    }
    let resTemp = goale - current
    // if(resTemp < 0){
      
    // }
    return posibilityCheckery(
      resTemp < 0 ? goale : resTemp,
      resTemp < 0 ? copyArray[1] : copyArray[0],
      resTemp < 0 ? copyArray.slice(1, copyArray.length) : copyArray,
      resTemp < 0 ? res : [...res, copyArray[0]],
    )
  }
  return cache;
}

console.log(monopolyi([10, 6, 1], 12));

// (12,10,[10,6,1],[]) --> resto 12-10 y resTemp = 2 --> goal = 2 | current | copyArray le quito uno = [10,6,1]

// function findOneReturnTwoOptimized(arr, res) {
//   const cache = {};
//   for (let i = 0; i < arr.length; i++) {
//     const complement = res - arr[i]; // You first set the diff to reach the result
//     if (cache[complement] !== undefined) {
//       return [complement, arr[i]];
//     }
//     // If not, just add it, please:
//     cache[arr[i]] = i;
//   }
//   return -1;
// }
// console.log(findOneReturnTwo([2, 7, 11, 15], 9));

// Tengo que dar un resultado, pero con la condición de que le dé la menor cantidad de billetes y aque además sea la menor conbinaciónes.
// Como testeo cual es la mejor conbinación? Tengo que compar --> que comparo? ---> como almaceno las
// 10, 6, 1 ---> result -> 12

// Primero creo una funcion, creo un cache, creo una funcion iteradora.
//La funcion iterador va a revisar numero por numero y los va a comparar para darse cuenta, cuales conbinacones me dan como resultado el numero 12
// Quiere decir que cada elemento del array se le aplica una funcion iterativa que va a comparar este elemento con el de los demás.
// En la función recursiva, se va a comparar

function monopoly2(arr, goal) {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    let temp = posibilityChecker(goal - arr[i], arr, []);
    // let temp = posibilityChecker(goal,arr, [])
    if (!cache[arr[i]]) {
      cache[arr[i]] = temp;
    }
  }
 function posibilityChecker(n, copy, res) {
   // console.log("n", n)
   if (copy.length === 0) {
     return res;
   }
     copy.forEach((coin) => {
       if (n - coin >= 0) {
         res.push(coin)
         console.log("coin foreach",coin)
         return posibilityChecker(n - coin, copy, res);
       }
     });


  //  console.log("n final", n);
  //  console.log("copy final", copy);
  //  console.log("res", res);
  //  return posibilityChecker(
  //    n - copy[0],
  //    n < 0 ? copy.slice(1, copy.length) : copy,
  //    n < 0 ? res : [...res, copy[0]],
  //    wichIteration
  //  );
 }
  return cache;
}


console.log(monopoly2([10,6,1], 12))





console.log(-8 < -0);
console.log(-8 - 6);
describe("addingTwo", () => {
  it("If the arguments are not array, object and number, an error will be thrown", () => {
    () =>
      expect(addingTwo(33, {})).toThrowError(
        "Arguments must be array, object and numeric value. To start the function"
      );
  });
  it("addingTwo([2, 7, 11, 15], {}, 0) should return an obj like: { '2+7': [ 2, 7 ], '7+2': [ 7, 2 ] }", () => {
    expect(addingTwo([2, 7, 11, 15], 9)).toStrictEqual({
      "2+7": [2, 7],
      "7+2": [7, 2],
    });
  });
  it("findOneReturnTwo([2, 7, 11, 15], {}, 0) should return an array like: [ 2, 7 ]", () => {
    expect(findOneReturnTwo([2, 7, 11, 15], 9)).toStrictEqual([2, 7]);
  });
});
