import { describe, it, expect } from "vitest";
/*
2. Factorial Recursivo
Problema: Escribe una función recursiva que calcule el factorial de un número dado.
Ejemplo:
Input: n = 5
Output: 120
Descripción: 5! = 5 * 4 * 3 * 2 * 1 = 120. Debes implementar la función usando recursión.
*/

// Un factorial es el resultado de multiplicar el numero multiplicado por todos los numeros anteriores a el hasta llegar al 0.
// Aqui primero hay que agregar una funcion donde hay que tener un solo elemento como argumento, que es el factorial
// Luego aplico mi caso base que es cuando el numero arg sea 1 o 0 se retorne 1
// En el retorno exterior entonces debe de estar la función factorial por el numero en turno y la funcion facotiral debe de tener el numero menos uno

function factorial(n){
    if(n===1||n===0){
        return 1
    }
    return factorial(n-1)*n
}
// console.log(factorial(5))

describe("factorial", () => {
    it("factorial(5) should not return nothing than is not 120", () => {
        expect(factorial(5)).not.toBe(10)
        expect(factorial(5)).not.toBe(102)
    })
    it("factorial(5) should return 120", () => {
        expect(factorial(5)).toBe(120)
    })
})