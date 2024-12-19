//

function numValidation(n){
    if(isNaN(Number(n))) throw new Error("The input is not a number")
    if(n === null)throw new Error("One of your inputs is empty")
}

export function add(a, b){
    // recuerda que si pones directamente el input sale que es un numero pero un numero NaN, por eso lo convertimos a numero.
    numValidation(a)
    numValidation(b)
    return a+b
}

export function substract(a, b){
    if(isNaN(+a)|| isNaN(+a)) throw new Error("The input is not a number")
        return a-b
}
export function multiply(a, b){
    if(isNaN(+a)|| isNaN(+a)) throw new Error("The input is not a number")
        return a*b
}
export function divide(a, b){
    if(isNaN(+a)|| isNaN(+a)) throw new Error("The input is not a number")
    if (!isFinite((a / b))) return 0
        return a/b
}