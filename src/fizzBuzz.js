export function fizzBuzz(n) {
  let output = "";
  if (n === undefined) throw new Error("no argument");
  if (typeof n !== "number") throw new Error("not a number");
  if (Number.isNaN(n)) throw new Error("Argument is NaN");
  
  if (n % 3 == 0) {
    output += 'fizz';
  } 
  if (n % 5 == 0){
      output += "buzz";
  }

  //  const multiplies = { 3: "fizz", 5: "buzz" };
  // //  let output = "";
  //  {
  //  }
  //  Object.entries(multiplies).forEach(([multiplier, word]) => {
  //    if (n % multiplier === 0) output += word;
  //  });

  return output===""?n:output;
}

// Primero escribir las pruebas y pensarlas
// Empieza pensando que podría salir mal desde el principio, que podría faltar, que podría ser un dato equivocado
// Al ultimo re-factoriza (sintetizar, resumir, etc)