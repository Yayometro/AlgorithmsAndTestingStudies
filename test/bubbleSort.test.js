import { describe, it, expect } from "vitest";


const array = [5,1,4,2,8]

function bubbleSortFunction(arr){
    let init
    let next
    for(let i = 0; i < arr.length; i++){
        if(arr[init] > arr[next]){
            let temp = arr[next]
            arr[next] = arr[init]
            arr[init] = temp
        }
    }
    return arr
}
// console.log(bubbleSortFunction())

// Pseudo codigo
// Tomar el primer index y compararlo con el segundo
    //Para esto necesito var 
        // Una variable para el index init y otra para el next
// Si el primero es mayor al segundo intercambiar posiciones del index entre ambos
//Repetir este mismo proceso hasta llegar al final del arr
//Correr el sorteo una vez mas, hasta que no se identifiquen cambios.

describe("BuubleSort", () => {
    // Checar las ent y salidas
    // Piensa en casos bordes -> por ejemplo que pasa si mi arr solo tienen un elemento? o tiene elementos repetidos? o un arr de 4 cincos?
    // it("My initital funct it should return and array, like: [1,5,4,2,8]", () => {
    //     function bubbleSortFunctionInit(arr){
    //         let init = 0
    //         let next = init + 1
    //         // for(let i = 0; )
    //         if(arr[init] > arr[next]){
    //             let temp = arr[next]
    //             arr[next] = arr[init]
    //             arr[init] = temp
    //         }
    //         return arr
    //     }
    //     expect(bubbleSortFunctionInit(array)).toStrictEqual([1,5,4,2,8])
    // })
    // it("My function it should return and ordered array, like: [1,4,2,5,8]", () => {
    //     function bubbleSortFunctionTwo(arr){
    //         for(let init = 0; init < arr.length; init++){
    //             if(arr[init] > arr[init + 1]){
    //                 let temp = arr[init + 1]
    //                 arr[init + 1] = arr[init]
    //                 arr[init] = temp
    //             }
    //         }
    //         return arr
    //     }
    //     expect(bubbleSortFunctionTwo(array)).toStrictEqual([1,4,2,5,8])
    // })
    it("My function it should return and ordered array, like: [1,2,4,5,8]", () => {
        // Cual sebería de ser tu caso base?
            // Se debe de detectar cuando no hayan cambios que hacer. Pero como?
            //Donde indentificas en el codigo actual, que se IDENTIFIQUEN LOS CAMBIOS?
                //En el comparador del init y el next.
        function bubbleSortFunction(arr){
            let changes = true
            while (changes === true) {
                changes = false
                for(let i = 0; i < arr.length - 1; i++){
                    if(arr[i] > arr[i + 1]){
                        let temp = arr[i + 1]
                        arr[i + 1] = arr[i]
                        arr[i] = temp
                        changes = true
                    }
                }
            }
            return arr
        }
        expect(bubbleSortFunction([5,1,4,2,8])).toStrictEqual([1,2,4,5,8])
        expect(bubbleSortFunction([4,2,6,9,3,7,1])).toStrictEqual([1,2,3,4,6,7,9])
    })
})
