import { describe, it, expect } from "vitest";

// Aquí tienes un ejercicio sencillo utilizando Binary Search:
// Ejercicio: Encontrar un Número en un Array Ordenado

// Input: nums = [-5, 0, 3, 4, 8, 10, 12, 14], target = 8
// Output: 4

// Input: nums = [-5, 0, 3, 4, 8, 10, 12, 14], target = 7
// Output: -1

// Pseudo code:
/**
 *  Me piden buscar el numero 3 en un array ordenado del 1 al 5.
    Primero tengo que tomar la mitad de mi array orginal
        ¿Como lo hago?
            Esto puede ser hecho por una funcion recursiva que se encarga de ir dividiendo arr y comparando el numero con el buscado, y si es retorna y si no es repite el proceso.
            La condición sería que el arr.length no sea menor a 1 o que result sea diferente de !null osea algpun valor numerico.
            Los pasos de esta funcion son:
                Divido el arr, por ejemplo 5/2 y tomo el numero MENOR entre lo que me retorne 5/2 es 2.5 y lo dejo en 2
                    Este dos lo comparo con el numero del array que busco: 2 === 3
                        Si e slo que busco lo retorno y se acabo :)
                        Si no es lo que busco...
                    Parto a la mitad de mi array por lo que puedo decidir ir a la izquierda o derecha del array.
                        Empecemos por la izquiera.
                        En mi array de la izquierda, tengo [1,2]
                        Vuelvo a partir el array a la mitad y tengo [1]
                            Comparo, 1 === 3 
                                Como ya no puedo dividir mi arr, decimos que la funcion que estaba dividiendo recursivamente, es detenida.
            Luego inicio los mismos pasos de arriba pero con mi array de la derecha y si este tiene el resultado actualizará la variable que buscamos.


            divideAndCompare - will take an array
            storage it
            start a while that will execute only if

    1. Ordeno el array
    2. creo variable de resultado
    3. guardo la mitad del array orginial mid = mitad
    4. Comparo mit == resultado
        4.1 - Si true -> retorno el result
        4.2 - Si false -> repito funcion recursiva 
    4. izquiera = a una funcion que divida el array de forma recursiva    

    Se agrega a la pila 
    1er -> searchTheNumber([1,2,3,4,5], 3)
    2do -> searchTheNumber([1,2], 3)
    2do -> searchTheNumber([1], 3)
    3ro -> se returna FALSE porque el [] ya no es divisible.
 */

function binarySearchRecursive(arr, find) {
  // Verificamos que sea un array y ordenamos.
  if (!Array.isArray(arr)) return "Arr is not an array";
  if (arr.length === 0) return false;

  // Split:
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === find) {
    return arr[mid];
  }
  if (find < arr[mid]) {
    return binarySearchRecursive(arr.slice(0, mid), find);
  } else {
    return binarySearchRecursive(arr.slice(mid), find);
  }
}

function binarySearch(arr, find){
    if (!Array.isArray(arr)) return "Arr is not an array";
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2) // 0 + 5 | 2 + 5 | 
        if(arr[mid] === find){
            return arr[mid]
        }
        if(find < arr[mid]){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}


describe("BinarySearch", () => {
  it("binarySearchRecursive should return true in all the scenarios", () => {
    expect(binarySearchRecursive([1,2,3,4,5], 5)).toBe(5)
    expect(binarySearchRecursive([1,2,3,4,5], 3)).toBe(3)
    expect(binarySearchRecursive([1,2,3,4,5], 2)).toBe(2)
  });
  it("binarySearch should return true in all the scenarios", () => {
    expect(binarySearch([1,2,3,4,5], 5)).toBe(5)
    expect(binarySearch([1,2,3,4,5], 3)).toBe(3)
    expect(binarySearch([1,2,3,4,5], 2)).toBe(2)
  });
});
