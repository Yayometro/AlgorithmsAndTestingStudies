import { describe, it, expect } from "vitest";

// Aquí tienes un ejercicio sencillo utilizando Binary Search:
// Ejercicio: Encontrar un Número en un Array Ordenado

// Input: nums = [-5, 0, 3, 4, 8, 10, 12, 14], target = 8
// Output: 4

// Input: nums = [-5, 0, 3, 4, 8, 10, 12, 14], target = 7
// Output: -1

// Pseudo code:
/**
 * Se verifica que sea un arr lo recibido
 * Se verifica que el arr.length sea mayor a 0
 *      Si no se retorna false
 * Se guarda en una variable la mitad de arr.legtn / 2 redondeado
 * Se compara si el numero dentro del array con el indice mitad es el buscado
 *      Si lo es se retorna
 * Si no, se compara a ver si el buscado es menor que el obtenido
 * Si lo es, se inicia este mismo procedimiento pero del lado izquierdo
 *      agregando a la variable de la funcion el array dividido de 0 a el mitad
 * Si no lo es, se repite esta misma funcion pero del lado derecho,
 *      Esto se consigue agregando como argumento el arr dividido en mid a el length
 *          Pero como slice define automaticamente el final del arr, dejamos solo mitad
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
/** PSUDOCODE:
 * Al final de cuentas para que este codigo funcione primero:
 * El array debe de estar ordenado
 * Se crean variables de izquierda y derecha, pues estos serán los punteros
 * Se crea ciclo while donde si izquiera es igual o mayor se detiene el cliclo
 * Se parte el arr a la mitad
 * Se usa esta midad como indice en el array para ver si es igual al numero buscado
 * Si es true se retorna
 * Si es mas pequeño find que array[mitad]
 * Entonces se actualiza el puntero rigth a mitad - 1 -> es importante el mas uno para decirle que la motad actual no es y que se recorra un numero a la izquierda
 * Si find > arr[mitad] -> entonces left = mitad + 1
 * Si acaband todo el ciclo no se encuentra nada se retorna false
 */
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


