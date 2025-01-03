import { describe, it, expect } from "vitest";

const array = [2, 6, 7, 90, 103];
const toSearch = 90;

//Example with lineal ecuation
function linealSearch(arr, e) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == e) {
      result = i;
    }
    console.log("No equal");
  }
  return result;
}
// console.log(linealSearch(array, toSearch))

// Example with BINARY SEARCH
function binarySearch(arr, toSearch) {
  // let leftSide = Math.floor(arr.length/2)
  // let rightSide = arr.length - leftSide
  let initial = 0;
  let maxIndex = arr.length; // 7
  let finalIndexLeft;
  while (initial <= maxIndex) {
    finalIndexLeft = Math.floor(maxIndex - initial / 2); // con 3 index
    if (toSearch === arr[finalIndexLeft]) {
      return finalIndexLeft;
    } else {
      if (toSearch > arr[finalIndexLeft]) {
        //Derecho
        initial = finalIndexLeft + 1; // 4
      } else {
        //izquierdo
        maxIndex = finalIndexLeft - 1; // 2
      }
    }
  }
  return -1;
}

//Creo mi funcion
//Array debe de estar sorteado. En caso de que no sortearlo
//Divido mi array en 2 partes
// basandome en el length del array lo divido por 2
// Si queda la mitad decimal. Usar math.floor()
// Cómo lo separo en dos partes?

// Verificar que mis mitades sean numeros enteros.
// Primero comparo con IGUAL con el primer elemento del segundo array. En caso de que si retorno el index
// Si mi elemento no fue igual, comparo mi elemento a buscar con el primer index de mi segundo array --> buscando mayor.
// Si mi elemento es mayor busco a la derecha (osea mi segundo array).
// Si no busco a mi izquiera / first arr
// Iterar la division de los array

// BINARY SEARCH CON RECURSION

// Crear una funcion wrapper con dos argumntos. El array y el item a buscar.
//Afuera creo 3 variables.
// Initial index en 0
// Mi final index siempre va a ser mi arr.length.
// Creo mi funcion recursiva en un return con args (indexInital en 0, indexArrDivider,)
//
//Esta función tiene como argumento, el leftSideFinalIndex,
// Cuantas variables necesito?
//Necesito mi array.length
// Necesito mi dividerArrayIndex
// Nececito un index inicial
// Cual es tu caso base?
//sabemos que la función va a estar iterando constantemente hasta que se detenga, entonces.
//Cuales serían las acciones correctas a tomar?
// Cuando mi index 0 llegué a ser mi index final.

// Que hace mi función?
// Divide un array a la mitad.
// Comparo el item buscado con el item del primer elemento del ultimo array.
//Si es mayor entonces divido el ultimo array.
//Si no es mayor, entonces divido en el primer array.
// Busca el item en el primer elemento del ultimo array.
//Si no lo encuentra Itera dividiendo el array a la mitad
//Repite el proceso del paso uno.

function binarySearchRecursive(arr, item) {
  function innerFunction(initialIndex, finalIndex, midIndex) {
    //Base cases:
    if (initialIndex > finalIndex) {
      return -1;
    }
    midIndex = Math.floor((initialIndex + finalIndex) / 2)
    if (arr[midIndex] === item) {
      return midIndex
    }
    if (item > arr[midIndex]) {
        initialIndex = midIndex +  1
    } else {
        finalIndex = midIndex - 1
    }
    return innerFunction(initialIndex, finalIndex, midIndex);
  }
  return innerFunction(0, arr.length - 1, Math.floor(arr.length - 1 / 2)); // 0 - 4 - 2
}
binarySearchRecursive([2,6, 7,90,103], 2)

// binarySearchRecursive([2, 6, 7, 90, 103], 2)
// innerFunction(0,4)
  // mid => 0+4 => 4/2=2   
      //2 es menor a 7 ? --> si --> entonces inner(0,2-1=1) ->0,1
  // mid => 0+1=1 ->1/2=>.5 --> se redondea a 0 ---> 
      // es 2 igual a 2? Si lo es.
//Primero busca que el index actual sea igual que el item search
//Luego revisa que el initIndex sea igual que el finalIndex
//Si no son iguales -> Compara si mi item 103 es mayor que arr[2] osea 7 o menor.
//Si es mayor entonces el initialIndex se le suma 1 y ahora es 3
// se actualiza el endIndexRigth de 2 pasa a ser 4-2/2 osea 1 + 2 ---> 3
//103 es igual al index 3 (osea 90?) --> no lo es
//Entonces actualizo mi initial index ahora es 4 ---> esto ya cumple con las condiciones de igual a initial index o final index
//Obviando esto. Podemos preguntar -- 
//Si quiero el 2
//En mi comparación 2 es menor a 7
//Entonces initalIndex es ahora 2-1= 1
//Y mi endIndexRight pasa a ser 4-2/2-1 --> 1
//Ahora 2 es menor que 6?
//Init se hace 0
//endIndexRight se hace 4-1=3/2=1-1=0
//2 es igual a 2. Entonces

describe("DivideAndConquer", () => {
  it("linearSearch should return 3 as result", () => {
    expect(linealSearch(array, toSearch)).toBe(3);
  });
  it("binarySearch should return 4 as result", () => {
    expect(binarySearch(array, 103)).toBe(4);
  });
  it("binarySearchRecursive should return 4 as result", () => {
    expect(binarySearchRecursive([2, 6, 7, 90, 103], 2)).toBe(0);
  });
});

//Verificar que los datos de entrada sean un array y un numero.
//Crear una nueva variable donde se guardará el resultado true/false
//Mapear el array y buscar en todo el lengt
//En esa busqueda por iteración comparo el elemento actual con mi elemento a encontrar
//Si da positivo return un true o a la variable result le asigno el valor encontrado.
