import { describe, it, expect } from "vitest";

const times10 = (n) => n * 10
const createCheckerTimes10 = (t10) => {
    const cache = {}; // Esta cache persiste en el closure
    return () => {
      if (cache[t10]) {
        console.log("Already calculated");
        return {
            isCalculated: true,
            result: t10
        }
      } else {
        console.log("No calculated yet");
        cache[t10] = t10;
        return {
            isCalculated: false,
            result: t10
        }
      }
    };
  };
  
  const checkerTimes10 = createCheckerTimes10(times10(5));

//   console.log(checkerTimes10())


describe("cache", () => {
    //   Ya me aseguré que hay data en el array que estan sorteados
    it("times10 should return any number by 10", () => {
        
    });
    it("My checker with arg=5, should return for first time false and the result as an obj", () => {
        expect(checkerTimes10()).toStrictEqual({isCalculated: false, result: 50})
        //****Revisa reiniciar, limpiar las variables despues de cada test */
    });
    it("My checker with arg=5, should return for second time true and the result as an obj", () => {
        checkerTimes10()
        checkerTimes10()
        expect(checkerTimes10()).toStrictEqual({isCalculated: true, result: 50})
    });
  });