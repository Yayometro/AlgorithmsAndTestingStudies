import { describe, it, expect } from "vitest";

// We have a linked list and we have to check if the ll has a cicle.
//

// PSEUDO CODE
// create start and end variables.
// Both variables start in node1
// create while --> condition where last node.next has null as value
// inner if --> start and end match -- return true o false

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(node) {
  let fast = node;
  let slow = node;
  let result = false;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast?.value === slow.value) {
      result = true;
      return result;
    }
  }
  return result;
}

const node6 = new Node(6);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const head1 = new Node(1, node2);

node6.next = node3;

// console.log(hasCycle(head1)); //true

const nodeF = new Node("f");
const nodeE = new Node("e", nodeF);
const nodeD = new Node("d", nodeE);
const nodeC = new Node("c", nodeD);
const nodeB = new Node("b", nodeC);
const headA = new Node("a", nodeB);

nodeF.next = null;
// console.log(hasCycle(headA)); //false

// You have one number and you have the digits of that number and each number will be multiplied my the square and then I have to add and see result
// 23 --- 2x2=4 + 3x3=9 = 13
// 13 --> 1 + 9(3x3) = 10
// 10 --> 1 + 0 = 1

// Another example with 12
// 1 -> 1 + 4 = 5
// 5 --> 5x5= 25
// 25 --> 4 + 25 = 29
// 29 --> 4 + 81 = 85
// ..... This has a cicle where it'll return to 89 several times, for instance will return to 89 in the 15 iteration
// We have to identify when a cicle it's present and return 1 number or false

// 7 -> 49 -> 97 -> 130 -> 10 -> 1
// 10 - 13 -> 29 -- true
// 16 -> 20 ->37 -> false

function loopIdentifier(num) {
  let slow = step(num);
  let fast = step(step(num));
  let result = false;
  let counter = 0;

  if (slow === 1) {
    result = true;
    return result;
  }

  while (slow !== fast) {
    slow = step(slow);
    fast = step(step(fast));
    if (slow === 1) {
      result = true;
      return result;
    }
    counter++;
  }

  function step(n) {
    let factorizedNumbers = String(n)
      .split("")
      .reduce((acc, n) => {
        return (acc += Number(n) * Number(n));
      }, 0);
    return factorizedNumbers;
  }

  return result;
}

describe("loopIdentifier", () => {
  it("loopIdentifier() should return true", () => {
    expect(loopIdentifier(7)).toBe(true);
    expect(loopIdentifier(10)).toBe(true);
  });
  it("loopIdentifier() should return false", () => {
    expect(loopIdentifier(16)).toBe(false);
    expect(loopIdentifier(20)).toBe(false);
  });
});


// [1,2, -1, 2,2]
// [1,1, -1, 2,2]
// [1,2, -1, 3,2]
// Que no sea de un elemento el array
// Que no vaya para atrás


//  --> you shoud 