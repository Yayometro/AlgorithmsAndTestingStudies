import { describe, it, expect } from "vitest";

// Reverse algorithm with linked list
//Input : 1,2,3,4
// Output : 4,3,2,1

function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

// Create the linked list
function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,

    // Add a node to the end of the list
    append: function (value) {
      const newNode = createNode(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    },

    // Add a node to the beginning of the list
    prepend: function (value) {
      const newNode = createNode(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    },

    insert: function (index, value) {
      const newNode = createNode(value);
      if (index < 0 || index >= this.length) return null;
      let current = this.head;
      let prev;
      //Update the prev
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      newNode.next = current;
      newNode.value = value;
      prev.next = newNode;
    },
    reverse: function() {
        console.log("this:", this)
      let current = this.head;
      let prev = null;
      // while(){
      while (current !== null) {
        let temp = current;
        let next = current.next;
        current.next = prev;
        prev = temp;
        current = next;
      }
      this.head = prev;
      return this.print();
    },

    remove: (index) => {
      if (index < 0 || index >= this.length) return null;
      let target = this.head;
      let prev;
      for (let i = 0; i < index; i++) {
        prev = current;
        target = current.next;
      }
      prev.next = current.next;
      target = null;
    },

    // Get the value at a specific index
    get: function (index) {
      if (index < 0 || index >= this.length) return null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current.value;
    },

    // // Remove a node at a specific index
    // remove: function (index) {
    //     if (index < 0 || index >= this.length) return null;
    //     let removedNode;
    //     if (index === 0) {
    //         removedNode = this.head;
    //         this.head = this.head.next;
    //     } else {
    //         let current = this.head;
    //         for (let i = 0; i < index - 1; i++) {
    //             current = current.next;
    //         }
    //         removedNode = current.next;
    //         current.next = removedNode.next;
    //         if (index === this.length - 1) {
    //             this.tail = current;
    //         }
    //     }
    //     this.length--;
    //     return removedNode.value;
    // },

    // Print the linked list
    print: function () {
      const values = [];
      let current = this.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values.join(" -> "));
      return values.join(" -> ");
    },
  };
}

describe("linkedlist", () => {
  it("Testing the reverse method in createdLinkList whith list 5 -> 4 -> 3 -> 2 -> 1 it should return 1 -> 2 -> 3 -> 4 -> 5", () => {
    const listLinked = createLinkedList();
    listLinked.append(1);
    listLinked.append(2);
    listLinked.append(3);
    listLinked.append(4);
    listLinked.append(5);
    expect(listLinked.reverse()).toBe("5 -> 4 -> 3 -> 2 -> 1");
  });
});
