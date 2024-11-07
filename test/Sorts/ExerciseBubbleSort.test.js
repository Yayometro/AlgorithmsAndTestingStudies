import { describe, it, expect } from "vitest";
/*
3.  Ordenamiento con Bubble Sort

Problema: Implementa el algoritmo de Bubble Sort para ordenar un array de enteros en orden ascendente.
Input: nums = [5, 1, 4, 2, 8]
Output: [1, 2, 4, 5, 8]
Descripción: Ordena el array de menor a mayor utilizando el algoritmo Bubble Sort.
*/

// First I need a function with an arr as argument
// What is the principle of the buuble sort? is to interchange the positions after compar what is bigger than the other.
// So I need a temporal variable
// I also need to compare if mi current element is biger than the next one if(arr[i] > arr[next])
// If is, then I change the positions and continue to next iteration in loop
// When this should stop? -> When the algorithm don't detect any change --> how can I know that? --> When in some iteration it detect that nothing was changed
// So I can create a variable continue = true --> once I access to this while loop is false, and if something is chnaged then the continue is true and repit the loop
// So starts as false, If mi variable find changes then is true again.
// But how I iterate on this? I need a for to iterate right? but where you set this iterator?
// function -> arg as arr -> temp -> continue -> and acc

function bubbleSort(arr){
    let cont = true;
    while(cont){
        cont = false
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                cont = true
            }
        }
    }
    return arr
}

describe("bubbleSort", () => {
    it("bubbleSort([5, 1, 4, 2, 8]) it should return [1, 2, 4, 5, 8]", () => {
        expect(bubbleSort([5, 1, 4, 2, 8])).toStrictEqual([1, 2, 4, 5, 8])
    })
})
