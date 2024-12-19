import {it, expect, describe} from "vitest"
import { add, substract, divide, multiply } from "../../src/aritmetihc"



describe("arithmetic", () => {
    describe("numValidation", () => {
        it("If a entry is not a number an error should be throwed", () => {

        })
    })
    describe("add", () => {
        it("The function should return the add of two numbers", () => {
            // Si pasas el error en el tobe or toThow el framwork peinsa que es el mismo framework que manda el error.
                // expect(add("hola",1)).toThrow(() => "The input is not a number")
            // Si lo mandas antes de la función a testear entonces si funciona.
            expect(() => add("hola",1)).toThrow("The input is not a number")
            expect(add(1,1)).toBe(2)
        })

    })
    describe("substract", () => {
        it("The function should return the substract of two numbers", () => {
            expect(() => substract("hola",1)).toThrow("The input is not a number")
            expect(substract(1,1)).toBe(0)
        })

    })
    describe("multiply", () => {
        it("The function should throw an error", () => {
            expect(() => multiply("hola",1)).toThrow("The input is not a number")
        })
        it("The function should return the miltiplication of two numbers", () => {
            expect(multiply(2,2)).toBe(4)
        })

    })
    describe("divide", () => {
        it("The function should return the divition of two numbers", () => {
            expect(() => divide("hola",1)).toThrow("The input is not a number")
            expect(divide(2,2)).toBe(1)
            expect(divide(5,0)).toBe(0)
        })

    })
})

// add(1)
// add(null, 1)
// add('1', 2)
// add(2, 'potato')
// subtract([1,3], 1)
// divide(5, 0)

console.log()