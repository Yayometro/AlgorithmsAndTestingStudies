import { describe, it, expect } from "vitest";

//EXAMPLES:
//INS: num initial, final y haga log de cada uno
//Iteration one:

// function loggerNumber(init, final) {
//   for (let i = init; i <= final; i++) {
//     console.log("current: ", i);
//   }
// }
// loggerNumber(1, 5);

// function loggerNumberRecursivo(init, end) {
//   if (typeof init === "number" && typeof init === "number") {
//     function insideFunction() {
//       console.log(init);
//       if (init <= end) {
//         insideFunction(init++);
//       }
//       insideFunction(init);
//     }
//   } else {
//     throw Error("arg is NaN");
//   }
// }
// loggerNumberRecursivo(1, 5);
//Primero necesito que mi insideFunction aumente/dism el valor de init --> almacene
//Primera mi linea --> loggerNumberRecursivo(1,5) linea22
//2 linea --> insideFunction(init) init = 1
//Segunda mi linea --> preguntar si es menor a end --Si--->
//3 linea --> insideFunction(init++) init === 2
//3 linea --> insideFunction(init++) init === 3
//3 linea --> insideFunction(init++) init === 4
//3 linea --> insideFunction(init++) init === 5 ---> condicion ya se no se cumple

//Primera mi linea --> loggerNumberRecursivo(1,5)
//Segunda mi linea --> insideFunction(init++) init++ = 2
//3 linea --> insideFunction(init++) 3
//3 linea --> insideFunction(init++) 4
//3 linea --> insideFunction(init++) 5 --> return 5

// CASO FUNCTION acumulador
// function acumuladorFunctionRecursivo(ini, end) {
//   if (typeof ini === "number" && typeof ini === "number") {
//     let resultArray = [];
//     function insideFunction() {
//       console.log(ini);
//       if (ini <= end) {
//         resultArray.push(ini);
//         insideFunction(ini++);
//       }
//       console.log(resultArray);
//     }
//     insideFunction(ini);
//     return resultArray;
//   } else {
//     throw Error("arg is NaN");
//   }
// }
// acumuladorFunctionRecursivo(1, 5);
//Primero necesito que mi insideFunction aumente/dism el valor de init --> almacene
//Primera mi linea --> acumuladorFunctionRecursivo(1,5) linea44
//2 linea --> insideFunction(init) init = 1 --> clg 1 --> push = 1 -> entra al if
//Segunda mi linea --> preguntar si es menor a end --Si--->
//3 linea --> insideFunction(init++) init === 2
//4 linea --> insideFunction(init++) init === 3
//5 linea --> insideFunction(init++) init === 4
//6 linea --> insideFunction(init++) init === 5 ---> condicion ya se no se cumple
//7 linea --> insideFunction(init++) init === 6 ---> condicion ya se no se cumple

// WRAPPER
// function wrapperFunctionRecursivo(init, end) {
//   if (typeof init === "number" && typeof init === "number") {
//     function iterativeFunction() {
//       console.log(init);
//       if (init <= end) {
//         iterativeFunction(init++);
//       }
//     }
//     iterativeFunction(init);
//   } else {
//     throw Error("arg is NaN");
//   }
// }

//
// function memoFn(init, end) {
//     if (init < end) {
//       memoFn(init++, end);
//     }

// }

// memoFn(1, 3)
//Ejecucion 1 --> Se agrega al star en primer lugar el wrapperFunctionRecursivo(1,5)
//Ejecucion 2 --> insideFunction()  --->

// -------------------------------------------
// ALGORITMO DE ACOMULADOR
// joinElements(["s","cr","t cod", ":) :)"], "e")

// function joinElements(array, joinString) {
//   let resultSoFar = ""
//   for (let i = 0; i < array.length - 1; i++){
//     resultSoFar += array[i] + joinString
//   }
//   return resultSoFar + array[array.length -1]
// }

function joinElementsRecursiveWithAcomulator(arr, sticker) {
  function innerFn(i, acc) {
    acc += arr[i];
    if (i === arr.length - 1) {
      return acc;
    }
    return innerFn(i + 1, acc + sticker);
  }
  return innerFn(0, "");
}

// console.log(
//   joinElementsRecursiveWithAcomulator(["s", "cr", "t cod", ":) :)"], "e")
// );

// Iteracion 1 -> corre joinElementsRecursiveWithAcomulator()
// Iteracion 2 -> corre innerFn(0, "")
// Iteracion 2 -> corre innerFn(i++, result + sticke) --> s+e --> "se"

// TAREA 1
//numero factoria
// 2 -> utiliza funcion memo
// function recursiveWithAcomulator(arr, sticker) {
//     function innerFn(i, acc){
//         acc += arr[i]
//         if(i === arr[arr.length - 1]){
//             return acc
//         }
//         return innerFn(i+1, acc + sticker)
//     }
//     return innerFn(0, "")
// }
// 1era -> runned and added in first line of callstack the  -> recursiveWithAcomulator(["s", "cr", "t cod", ":) :)"], "e")
// 2era -> innerFn(0, "") linea 142 -> se suma "s" 
// 3era -> innerFn(1, "se") - line 140 --> + "cr"
// 4era -> innerFn(2, "secre") - line 140 -->  + "t cod"
// 5era -> innerFn(3, "secret code") - line 140 --> ":) :)"
// 6era -> innerFn(4, "secret code:) :)") - line 140 --> Se cunple la condicion y se retorna un string.

// function recursiveWithAcomulator(arr, sticker) {
//     function innerFn(i, cache, acc){
//         if(cache[acc += arr[i]]){
//             console.log("already calculated")
//             acc += arr[i]
//         } else {
//             cache[acc += arr[i]] += arr[i]
//             acc += arr[i]
//         }
//         if(i === arr[arr.length - 1]){
//             return acc
//         }
//         return innerFn(i+1, cache, acc + sticker)
//     }
//     return innerFn(0, {}, "")
// }
// 1era -> runned and added in first line of callstack the  -> recursiveWithAcomulator(["s", "cr", "t cod", ":) :)"], "e")
// 2era -> innerFn(0, {}, "") linea 142 -> 
    //2.1 -> se verifica que no existe "s". Entonces se agrega al cache -> {"s":"s"}
// 3era -> innerFn(1, {"s":"s"} "se") - line 140 --> + "cr"
    //3.1 -> se verifica que no existe "secr". Entonces se agrega al cache -> {"s":"s","secr":"secr"}
// 4era -> innerFn(1, {"s":"s","secr":"secr"}, "secre") - line 140 --> + "cr"
    //3.1 -> se verifica que no existe "secre". Entonces se agrega al cache -> {"s":"s","secr":"secr", "secre":"secre"}
// 4era -> innerFn(1, {"s":"s","secr":"secr"}, "secret code") - line 140 --> + "cr"
    //3.1 -> se verifica que no existe "secret code". Entonces se agrega al cache -> {"s":"s","secr":"secr", "secret code":"secret code"}


    function recursiveWithAcomulator(arr, sticker) {
        const cache = {}
        function innerFn(i,  acc){
            if(i === arr[arr.length - 1]){
                return acc
            }
            if(cache[acc += arr[i]]){
                console.log("already calculated")
                return cache[acc += arr[i]]
            }
            acc += arr[i]
            cache[acc += arr[i]] = innerFn(i+1, acc + sticker)
            return cache[acc += arr[i]]
        }
        return innerFn(0, "")
    }
    // 1era -> runned and added in first line of callstack the  -> recursiveWithAcomulator(["s", "cr", "t cod", ":) :)"], "e")
    // 2era -> innerFn(0, "") linea 142 -> 
        //2.1 -> No se cumple el caso base.
        //2.2 -> No HAY cache recalculado "s"
        //2.3 -> se itera el acc -> ""+"s" = s". 
        //2.4 -> el cache{"s": innerFn(1,"se")}
    // 3era -> innerFn(1,"se") 
        //2.3 -> No se ha calculado previamente "secr". 
        //2.3 -> se itera el acc -> acc = "secr". 
        //2.4 -> el cache{"secr": innerFn(1,"secre")}
    // 4era -> innerFn(2,{"secr": innerFn(1,"secre"})
        //3.1 -> se verifica que no existe "secre". Entonces se agrega al cache -> {"s":"s","secr":"secr", "secre":"secre"}
    // 4era -> innerFn(1, {"s":"s","secr":"secr"}, "secret code") - line 140 --> + "cr"
        //3.1 -> se verifica que no existe "secret code". Entonces se agrega al cache -> {"s":"s","secr":"secr", "secret code":"secret code"}
    
    

describe("nFactorial", () => {
  // Ya revisé que mis entradas son numeros.
  // Si le meto init 1 e end 5 debería de obtener 5 console.log con sus numeros y un array [1,2,3,4,5]
  //   it("acumuladorFunctionRecursivo  --> Si le meto init 1 e end 5 debería de obtener 5 console.log con sus numeros y un array [1,2,3,4,5]", () => {
  //     expect(acumuladorFunctionRecursivo(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  //   });
  //   it("acumuladorFunctionRecursivo  --> Si le meto init 1 e end 5 debería de obtener 5 console.log con sus numeros y un array [1,2,3,4,5]", () => {
  //     expect(acumuladorFunctionRecursivo(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  //   });
  it("the fn joinElementsRecursiveWithAcomulator should return 'secret code:) :)' ", () => {
    expect(
      joinElementsRecursiveWithAcomulator(["s", "cr", "t cod", ":) :)"], "e")
    ).toBe("secret code:) :)");
  });
});
