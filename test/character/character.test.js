//
// import { v4 as id } from 'uuid';

import { describe, expect, it } from "vitest";

export class Person {
  constructor(firstName, lastName) {
    if (!firstName || !lastName) {
      throw new Error('First name and last name are required');
    }

    this.id = 'person-' + window.crypto.randomUUID();
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export const rollDice = (diceCount = 4, diceSides = 6) => {
  const rolls = [];

  for (let i = 0; i < diceCount; i++) {
    rolls.push(Math.floor(Math.random() * diceSides) + 1);
  }

  rolls.sort((a, b) => a - b); // Sort rolls to drop the lowest one
  return rolls.slice(1).reduce((acc, curr) => acc + curr, 0); // Sum the top 3 rolls
};

export class Character extends Person {
	constructor(firstName, lastName, role) {
		super(firstName, lastName);

		this.role = role;
		this.level = 1;

		this.createdAt = new Date();
		this.lastModified = this.createdAt;

		this.strength = rollDice(4, 6);
		this.dexterity = rollDice(4, 6);
		this.intelligence = rollDice(4, 6);
		this.wisdom = rollDice(4, 6);
		this.charisma = rollDice(4, 6);
		this.constitution = rollDice(4, 6);
	}

	levelUp() {
		this.level++;
		this.lastModified = new Date();
	}
}

// We know that the first and last name should be what we pass in.
// Full name should likely be the first and last name combined.
// We know that the role should be whatever was given to the contructor.
// We know that the level of the character will always default to 1.
// Bonus: Could you figure out a clever way to see if the date was successfully modified?


describe("Character", () => {
    const jairCharacter = new Character("Jair", "Vazquez", "Programer")
    it("Character class name and lastname are not set it an error message should be throw", () => {
        expect(() => new Character().fullName).toThrow('First name and last name are required')
    })   
    it("Character class should display the full name as 'Jair Vazquez'", () => {
        expect(jairCharacter.fullName).toBe("Jair Vazquez")
    })   
    it("Character class should get the role set it when the class was created'", () => {
        expect(jairCharacter.role).toBe("Programer")
    })   
    it("If the character changes in something, the class should register the last change and the createdAt should be inmutable'", () => {
        const lastUpdate = jairCharacter.lastModified.toLocaleDateString()
        expect(jairCharacter.createdAt.toLocaleDateString()).toBe("9/12/2024")
        console.log("lastModify BEFORE: ", lastUpdate)
        // New change has been made and class should know this
        jairCharacter.levelUp()
        expect(jairCharacter.lastModified.toString()).not.toBe("Mon Dec 09 2024 18:05:55 GMT-0600 (hora estándar central)")
    })   
    it("The class should generate an is string with a sufix person on it and a length of at least 40 char", () => {
        expect(jairCharacter.id).contains('person-')
        expect(typeof jairCharacter.id).toBe("string")
        expect(jairCharacter.id.length).toBeGreaterThan(40)
    })   
})