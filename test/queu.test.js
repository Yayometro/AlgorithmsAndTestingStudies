import { describe, it, expect } from "vitest";

// Tengo que retornar el primer caracter unico de un string.


// "obligaciones" -- 


function firstUniqueCharacter(string){
    const queue = [];
    const cache = {};
    // Fase 1
    for(let i = 0; i < string.length; i++){
        if(cache[string[i]]){
            cache[string[i]] = cache[string[i]] + 1
        } else {
            cache[string[i]] = 1
        }
         queue.push();
    }
    // Fase 2 try to compare with the cache
    
    for (let i = 0; i < string.length; i++){
            while (queue.length > 0 && cache[string[i]] === 1) {
             
                queue.shift()
              
            }
    }
    // 3 phase [b,l,g,a,c,n,e,s]
    queue = [queue.shift()]
    return queue[0]
}

// const circ = new CircularQueue(10)
// console.log(circ);
describe("Queu data structure", () => {
    it("My function should return 'b'", () => {
        // expect(firstUniqueCharacter("obligaciones")).toBe("b")
    })
})

// Problema de Josefo
// Hay N personas de pie en un círculo esperando a ser ejecutadas. El recuento comienza en un punto del círculo y continúa alrededor del círculo en una dirección fija. En cada paso, se salta un cierto número de personas y se ejecuta a la siguiente persona. La eliminación continúa alrededor del círculo (que se hace cada vez más pequeño a medida que se eliminan las personas ejecutadas), hasta que solo queda la última persona, a quien se le 
// solo queda la última persona, a quien se le da la libertad. 

// Dado el número total de personas N y un número k que indica que se omiten k-1 personas y se mata a la késima persona en un círculo, la tarea consiste en elegir a la persona del círculo inicial que sobrevive.

// Ejemplos:

// Entrada: N = 5 y k = 2
// Salida: 3
// Explicación: Primero, la persona en la posición 2 es asesinada, 
// luego la persona en la posición 4 es asesinada, luego la persona en la posición 1 es asesinada. 
// Finalmente, la persona

// n -- k -- p -- 

class CircularQueue {
  constructor(k) {
    this.queue = new Array()
    this.front = -1;
    this.rear = -1;
    this.size = 0;
    this.capacity = k;
  }

  enQueue(value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.front = 0;
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = value;
    this.size++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;
    if (this.size === 1) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
      this.queue.shift()
    }
    return true
  }

  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.queue[this.rear];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }
}


function josephus(n, k){
  const circle = new CircularQueue(n)
  for(let i = 1; i <= n; i++){
    circle.enQueue(i)
  }
  console.log("circle, ", circle)
  while(circle.size > 1){
    // console.log("circle, ", circle)
    for(let i = 0; i < k; i++){
      circle.enQueue(circle.queue[0])
      circle.deQueue() 
    }
    circle.deQueue() 
  }
  return circle.Front()
}

function josephusArr(n, k){
  const circle = []
  for(let i = 1; i <= n; i++){
    circle.push(i)
  }
  while(circle.length > 1){
    for(let i = 1; i < k; i++){
      circle.push(circle.shift())
    }
    circle.shift()
  }
  return circle[0]
}
// [1,2,3,4,5]
// [3,4,5,1]
// [5,1,3]
// [3,5]
// [3]

describe("queu", () => {
  it("My function josephus should return 3", () => {
    expect(josephusArr(5, 2)).toBe(3)
  })
})


// primera iteración front es de 1 y el size es de 4
// 2 iteración front termina en 2 