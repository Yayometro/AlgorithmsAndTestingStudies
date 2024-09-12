import { describe, it, expect } from "vitest";
import { fizzBuzz } from "../src/fizzBuzz";

// Write a function in which if you pass a number as an argument:
// -show "fizz" if it's multiple of 3.
// -show "buzz" if it's multiple of 5.
// - show "fizzbuzz" if it's multiple of 3 y 5.
// - show a number if its none of the past cases


describe("fizzBuzz", () => { //Agrupa los test en este caso "FizzBuzz"
    it("should be a function", () => { //The case
        expect(typeof fizzBuzz).toBe("function");
    })
    it("must have arguments", () => { //The case
        expect(()=>fizzBuzz()).toThrow('no argument')
    })
    it("argument must be a number", () => { //The case
        expect(()=>fizzBuzz('5')).toThrow("not a number")
    })
    it("argument should not be a NaN", () => { //The case
        expect(()=>fizzBuzz(Number('qwdsq'))).toThrow("Argument is NaN")
    })
    it("if arg is not Fezz or Buzz, argument is returned", () => { 
        expect(fizzBuzz(1)).toBe(1)
        expect(fizzBuzz(4)).toBe(4)
    })
    it("if arg is multiple of 3, is fizz", () => { 
        expect(fizzBuzz(3)).toBe('fizz')
        expect(fizzBuzz(18)).toBe("fizz");
        expect(fizzBuzz(21)).toBe("fizz");
    })
    it("if arg is multiple of 5, is buzz", () => { 
        expect(fizzBuzz(20)).toBe('buzz');
        expect(fizzBuzz(55)).toBe("buzz");
    })
    it("if arg is multiple of 3 and 5, then is fizzbuzz", () => { 
        expect(fizzBuzz(30)).toBe("fizzbuzz");
        expect(fizzBuzz(120)).toBe("fizzbuzz");
    })
    
})

//Start first with the cases in the FizzBuzz