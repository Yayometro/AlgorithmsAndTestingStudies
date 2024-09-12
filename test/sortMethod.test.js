import { describe, it, expect } from "vitest";

function merge(l,r){
    const emptyArray = []
    while(l.length && r.length){
        if(l[0] < r[0]){
            emptyArray.push(l.shift())
        } else {
            emptyArray.push(r.shift())
        }
    }
    return [...emptyArray, ...l, ...r]
}

function mergeSort(arr){
    if(Array.isArray(arr)){
        if(arr.length >= 1){
            if(arr.length === 1){
                return arr
            }
            let m = Math.floor(arr.length / 2);
            let arrayLeft = arr.slice(0, m)
            let arrayRigth = arr.slice(m)

            // let leftDivision = mergeSort(arrayLeft)
            // let rightDivision = mergeSort(arrayRigth)
            return merge(mergeSort(arrayLeft), mergeSort(arrayRigth))
        } else {
            throw Error("array must have elements")
        }
    } else {
        throw Error("Argument is not an array")
    }
}
 
// Primero tengo una funcion arrayDivider con un arr de argumento.
// Antes de hacer mi division, reviso que hayan length para dividirlo 
// En caso de que si:
// En una variable "M" -> obtengo la primera mitad de mi array dividiendo Math.floor(arr.length / 2)
// retorno mi arrayDivider dentro de la primera.
// Mi caso base llega cuando mi arr.length en argumento es igual a 1
// Luego tengo que divir mi mitad l y r.
    // l es igual arr del index 0 al m y el r es de m a arr.length 
    //  guardo en variable leftDivision -> el arrayDivider(l) 
    //  guardo en variable rightDivision -> el arrayDivider(r) 
// Para hacer la recursión, mi innerFunction debe de retornarse a si misma con los argumentos innerfunction()
// Llegados a este punto se ejecuta la funcion retornar funcion merge(leftDivider, rightDivider)



// mamam como ejemplo.
//El objetivo es encontrar que una palabra sea un palindrome.
//Crear una funcion que tiene como arg string.
// Puedo guardar la palabra como la tengo.
// uso un metodo para tomar el primex index del string y divido el length string entre 2. Math.Floor para redondear
// Revisar si mi elemento no es par, que en este caso puedo revisarlo -> n % 2 === 0 
    //Si no es par pues solo retira el ultimo character.
    // Si es par pasa la palabra completa.
    // substring de x a y numero y comparo.
//Comparo si mi var 1 es igual a las 2 y si 
// Mando un true o false


// hola
// String inicial y tengo que crear todas las combinacione sposibles con las letras.
// create a function
// arg string
// What is input and th eoutput? --> input = string |||| output array
// wraped function
// guardo un array vacio
// creo mi inner function
    // arg character --> h
    // cadena de string ---> ola
    // arg string acc
    // current index
//  retorno mi funcion inner 

function permutationFunction(string) {
    const cache = {}
    const stringArray = string.split() // --> [h,o,l,a]
    function innnerFunction(arr) {
        if (arr.length) {
            return arr[0]
        }
       
        for (let i = 0; i < stringArray.length; i++) {
            const current = stringArray[i]
            const sobrante = stringArray.splice(i, 1)
            let restPermutation = innnerFunction(sobrante)
            for(let it = 0; i < sobrante.length; it++){

            }
            let addedChar = current.concat(restPermutation) 
            
        }
        innnerFunction(stringArray)
    }
}



describe("SortMethod", () => {
    it("in my merge function if left is [9,82] and rigth is [10] it should return [9,10,82]", () => {
        expect(merge([9,82],[10])).toStrictEqual([9,10,82])
        expect(merge([9,82],[10,90])).toStrictEqual([9,10,82,90])
    })
    it("What could be wrong if the rigth goes first than left", () => {
       
    })
    it("Argument should be an array", () => {
        () => expect(mergeSort("[38,27,43,3,9,82,10]")).toThrowError("Argument is not an array")
    })
    it("expected to be ordered", () => {
        expect(mergeSort([38,27,43,3,9,82,10])).toStrictEqual([3,9,10,27,38,43,82])
    })
})

// Remember you cannot develop code if there's no situation that goes wrong