import { describe, it, expect } from "vitest";

// Order an array using mergeSort

// I have an arr that I need to part into 2 pieces.
//This two pieces should be parted until it cannot be divised.
// When this happens I have to compare the elements to know what is grather than the other one and then I have to join them.
//So first I need to divide my array.
// Then I need to stablish a left arr and right arr
// Then I need to divide this to arr recursively until I get the minim length and start to order recursively to finally have two arrays that I can joint toghether in another function that merge them
// What variables do I need? one to set the middle, one for left other for right

// What does merge? -> it compares the first two elements of the arrays as arguments and order the minur value in some array to further return a single ordered array with the elements.

function mergeSort(arr){
    if(!Array.isArray(arr)) return "Argument should be an array"
    if(arr.length === 1){
        return arr
    }
    let m = Math.floor(arr.length/2)
    const left = arr.slice(0, m) 
    const right = arr.slice(m) 
    return merge(mergeSort(left), mergeSort(right))
}

function merge(l, r){
    if(!Array.isArray(l) || !Array.isArray(r)) throw Error("L and R, should be arrays")
    const empty = []
    while(l.length && r.length){
        if(l[0] < r[0]){
            empty.push(l.shift())
        } else {
            empty.push(r.shift())
        }
    }
    return [...empty, ...l, ...r]
}
// Corro el arr con[3,1,2] en donde left es 3 y rigth es [1,2]
//luego retorno merge(mergeSort[3], mergeSort([1,2]))
// En el primer caso de mergeSort[3] el arr tiene length de uno, por lo que se cumple el caso base y retorno el [3]
// ahora tengo merge([3], mergeSort([1,2])) -> asi que tengo que solucionar el mergeSort[1,2]
//En donde entra en mergeSort y m es 1 -> entonces left es [1] y rigth es [2]
// Luego em merge([1],[2]) -> 1 es mas pequeño que 2 entonces se va a empty y se retorna: [1,2]
// pór lo tanto  merge(mergeSort[3], mergeSort([1,2])) ahora es --> merge([3], [1,3])
// En donde se vuelve a comparar 3 < 1 -> como 3 es mas grande el 1 se hace push a empty y luego se ejecuta:
// merge 3 < 2, donde 2 es mas pequeño y por lo tanto se pushea al empty, luego sigue la sig iteracion donde:
// El l ya no tiene length por lo tanto se retorna [1,2,3]

// pila:
//  return final -> [1,2,3]
// merge([3],[1,2])
// merge([1],[2])
// mergeSort([1,2])
// mergeSort([3])
//merge(mergeSort[3], mergeSort([1,2]))
//mergeSort([3,1,2])


describe("mergeSort", () => {
    it("merge shoud retorn error if arg is not arrays", () => {
        () => expect(merge({},2)).toThrowError("L and R, should be arrays")
    })
    it("mergeSort('wpw') shoud retorn error if arg is not arrays", () => {
        expect(mergeSort({},2)).toBe("Argument should be an array")
    })
    it("mergeSort([3,1,2]) shoud return [1,2,3]", () => {
        expect(mergeSort([3,1,2])).toStrictEqual([1,2,3])
    })
})
