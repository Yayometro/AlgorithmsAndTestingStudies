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
            //Caso base
            if(arr.length === 1){
                return arr
            }
            let m = Math.floor(arr.length / 2);
            let arrayLeft = arr.slice(0, m)
            let arrayRigth = arr.slice(m)

            return merge(mergeSort(arrayLeft), mergeSort(arrayRigth))
        } else {
            throw Error("array must have elements")
        }
    } else {
        throw Error("Argument is not an array")
    }
}
mergeSort([9,2,4,6])
//Se ejecuta la función mergeSort([9,2,4,6])
// Primero verifica si el arg es un array
//Luevo verifica que el arr tenga mas de un elemento
// Luego verifica el primer caso base que es que si el array que entra como argumento tiene un length de 1 entonces retorne el array con ese solo argumento
// Luego crea una variable m en donde se le aplica una division con redondeo que es la mitad del array argumento. En este caso m es igual a 2
// Luego usando el m como medida, usamos el arrayLeft y rights para decidir sus espacios. En este caso l es de 0 a 2 y r de 2 a 4
// Y usamos .slice() pues este metodo toma un array por el primer y ultimo index que le pongas como argumentos, con lo que obtenemos dos arrays -> l[9,2] y r[4,6]
// Luego retorno la misma función merge con la función mergeSort como  argumentos para l y r, lo que quedaría asi: merge(mergeSort([9,2]), mergeSort([4,6]))
// Luego vamos a ver el ejempl del mergeSort del caso de la derecha. Entra con un arr [9,2] que luego divide y queda con un leftArray = [9] y otro igual a [2] para el rigth
// Luego se vuelve a correr una función merge() donde ahora es asi: merge(mergeSort([9]), mergeSort([2]))
// Luego  en el caso de la izquiera, se cumple el caso base y se retorna [9]
// Luego  en el caso de la derecha, se cumple el caso base y se retorna [2]
// Eso nos hace regresarnos al merge(mergeSort([9]), mergeSort([2])) donde ahora es merge([9]), mergeSort([2]) y lo que hace es comparar un com otro
// el 9 es mayor que 2, por lo tanto 2 se agrega al empty array y el 9 se deja así.
// En la siguiente iteración ya no se cumple el ciclo while y se retorna un array [2,9] -> porque 2 estaba en el empty array, luego sigue el 9 y luego lo que siga en el right array que en este caso no es nada porque ese array estaba vacio.
// Una vez resuelto este array regresamos al bucle suspendido de merge(mergeSort([9,2]), mergeSort([4,6])) --> 
// donde ahora es merge([2,9]), mergeSort([4,6])) --> entonces todos los argumentos del lado de la izquierda quedaron resueltos y falta hacer lo mismo pero de la derecha.
// Donde como sigue el mismo proceso el final resultaría merge([2,9]), [4,6])
// Aqui seguiria el mismo concepto donde 2 se compara con 4.--> 2 se agrega al empty array[2] y queda:
// merge([9]), [4,6]) --> donde 9 es mayor a 4  cuatro se manda al empty array. dando como resultado en la sig iteración.
// merge([9]), [6]) --> donde 9 es mayor, se pushea el 6 al empty array[6] y se cumple el caso base:
// merge([9]), [])  ---> se cumple el caso base y se retorna [2,4,6,9]



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