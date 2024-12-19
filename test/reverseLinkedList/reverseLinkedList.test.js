import { describe, expect, it } from "vitest";


// Pseudocode:
// beforeTail Inicia en null
// current = this
// Creamos while que verifique si hay current. Si no lo hay se detiene
// Creamos variable currentHead
// currenthead guardará el return del reverseUntilK() que es 2
// Guardamos en una variable beforeTail.next (que es undefinied) = currentHead (que es2)

// Esto haría que luego que hagamos el reverse
// donde 1.next = null y 2.next = 1 y current = 3
// podamos conectar el beforeTail(null).next(null) = reverseUntilK()(2)
// luego currentHead(2).next(1) = current(3)
// Luego renombramos beforeHead(null) = skipK(4)

// Se repite reverse: 5.next = null y 6.next = 5 y current = undefined
// currentHead = reverseUntilK(6)
// beforeTail(4).next(5) = currentHead(6)
// currentHead(6).next(5) = current(undefined)
// beforeTail(4) = skipK(undefinied)


class LinkedList {
    constructor (value, next = null){
        this.value = value
        this.next = next
    }
    printList(){
        let temp = this
        while(temp !== null){
            console.log(temp.value)
            temp = temp.next
        }
    }

    kReverse(k){
        let beforeTail = new LinkedList(0)
        let current = this 
        
        while(current){
            // console.log("current", current)
            let currentHead = reverseUntilK() // 2 - 6
            beforeTail.next = currentHead // 2 - 6
            currentHead.next = current // 3 - undefined
            beforeTail = skipK() // 4 - null
        }
           
        function reverseUntilK(){
            let temp 
            let prev = null
            let counter = 0 
            while(k > counter && current){
                // This is for the current iteration
                    temp = current.next // 2 - 3 / 6 - null
                    current.next = prev // null - 1 / null - 5
                    console.log({"current.next ->>>> ": current.next,  " and current --> ": current})
                // This is for the next iteration
                    prev = current // 1 - 2 / 5 - 6
                    current = temp // 2 - 3 || 6  - undefined
                    // console.log("current END inside reverseK -> ", current)
                // Add to counter
                counter++
            }
            return prev  
        }

        function skipK(){
            if(!current) return null
            let temp = current.next // 4
            current = temp.next // 5-> 
            return temp
        }
              
    }
                    
    reverse(){ // 2 <--1 -->null
        let temp 
        let current = this // 1 - 2
        let prev = null // null - 2
        while(current){
            // This is for the current iteration
                temp = current.next // 1 - 2 - 
                current.next = prev // null - 
            // This is for the next iteration
                prev = current// 1 - 
                current = temp // 2 
            }
        return prev
    }


}

// const head = new LinkedList(1)
// head.next = new LinkedList(2)
// head.next.next = new LinkedList(3)
// head.next.next.next = new LinkedList(4)
// head.next.next.next.next = new LinkedList(5)

// head.printList()
// const newhead = head.reverse()
// console.log(newhead)
// newhead.printList()



const headWithK = new LinkedList(1)
headWithK.next = new LinkedList(2)
headWithK.next.next = new LinkedList(3)
headWithK.next.next.next = new LinkedList(4)
headWithK.next.next.next.next = new LinkedList(5)
headWithK.next.next.next.next.next = new LinkedList(6)

headWithK.printList()
const newReverseHead = headWithK.kReverse(2)
console.log(newReverseHead)



describe("ReverseLinked List", () => {
    it("reverseLinkedListWithK should return true", () => {

    })
})