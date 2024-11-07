import { describe, it, expect } from "vitest";

// function callMe(){
// callMe();
// callMe();
// callMe(anyTime)
// }

// //   //EJEMPLO 1 de LOOP

// // function callMe() {
// //   callMe(); //Solo la ejecución de esta linea es un loop
// //   callMe();
// //   callMe(anyTime);
// // }

// // // EL callMe padre se agrega al callstack
// // // EL callMe

// let tracker = 0
// function callMeTwo(){
//     tracker++
//     if(tracker === 3){
//         console.log("loops")
//         return "loops"
//     }
//     callMeTwo("anyTime");

// }
// callMeTwo()
//   //Se corre el callMetwo de la linea 27
//   //tracter aumenta a 1
//   //tracter aumenta a 2
//   //tracter aumenta a 3 y aqui return "loops"
//   //**Tres veces se llama el callMetwo
//   //Todos los

//   const loopNtimes = (n) => {
//     console.log("n === ", n)
//     if(n <= 1){
//         return "compleate"
//     }
//     return loopNtimes(n-1)
//   }
//   loopNtimes(3)
//Stack loopNtimes fue pushaeado 1 vez
//Stack loopNtimes fue pushaeado 2 vez
//Stack loopNtimes fue pushaeado 3 vez el n ya cumple la condición
//Se detiene todo el loop con el return "compleate"

//EJERCICIOS:
// Hacer un algoritmo que si le meto un numero se multiplique por sus antecesores.
  // const nFactorial = (n) => {
  //   if(typeof n === "number"){
  //       if(n === 0 || n === 1){
  //           return 1
  //       }
  //       let acc = 1
  //       for(let i = 2; i <= n; i++){
  //           acc = i * acc
  //       }
  //       return acc
  //   } else {
  //       throw Error("arg is NaN")
  //   }
  // }

const nFactorial = (n) => {
  if (typeof n === "number") {
    if (n === 0 || n === 1) {
      return 1;
    }
    return (n) * nFactorial(n-1) 
  } else {
    throw Error("arg is NaN");
  }
};
nFactorial(3)
// 2*1
// 3*(2*1)
// 4*(3*2*1)

// nFactorial(3)
// nFactorial(2)
// nFactorial(1)*3 --> caso base y se detiene --> se transforma 1
//Luego se retorna 1 * 2 porque en el callsatck el ultimo arg estaba como 2
//Luego se retorna 2 * 3 porque en el callsatck el ultimo arg estaba como 3
//

describe("nFactorial", () => {
  // Revisa los inputs y outputs
  // Empieza con los test "borders" o excepciones primero:
  // Por ejemplo si le meto 1 o 0 que debería de obtener?
  // Luego casos mas generales.

  it("If you set an arg as NaN -> an error is throwed", () => {
    () => expect(nFactorial("5")).toThrow(/arg is NaN/i);
  });
  it("If the funct arg is 1 or 0 it should return 1", () => {
    expect(nFactorial(1)).toBe(1), expect(nFactorial(0)).toBe(1);
  });
  it("The funct with arg 5 should return 120", () => {
    expect(nFactorial(5)).toBe(120);
    expect(nFactorial(6)).toBe(720);
  });
});

//ALGORITMO FACTORIAL CON RECURSIVIDAD.
