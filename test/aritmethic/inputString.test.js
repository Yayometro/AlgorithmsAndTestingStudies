import { describe, it, expect, test } from "vitest";
import { stringToNumber, generateFibonacci } from "../../src/inputString";

describe("InputString", () => {
  it("Convierte string a num", () => {
    expect(stringToNumber("23")).toBe(23);
  });
  it("Trhows an error if a given string it's not an number", () => {
    //
    expect(() => stringToNumber("dwe23")).toThrow();
  });
  it("The input has several space as a value, the functions should remove the initial and final spaces", () => {
    expect(() => stringToNumber("  ")).toThrow(/InpUt empty/i); // Puedes poner el error a medias o una parte del texto del error, normal o con regex para cuidar el caseSensitive
  });
});

describe('toBe', () => {
	test('objects should not be strictly equal', () => {
		expect({ a: 1 }).toEqual({ a: 1 });
	});

	test('arrays should be strictly equal', () => {
		expect([1, 2, 3]).toEqual([1, 2, 3]);
	});

	test.fails('functions should to be strictly equal', () => {
		expect(() => {}).toEqual(() => {});
	});

    it('should generate fibonacci sequence', () => {
	const fibonacci = generateFibonacci(10);
	expect(fibonacci).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
});

describe('toEqual', () => {
	test('similar objects should pass with #toEqual', () => {
		expect({ a: 1 }).toEqual({ a: 1 });
	});

	test('similar nested objects should pass with #toEqual', () => {
		expect({ a: 1, b: { c: 2 } }).toEqual({ a: 1, b: { c: 2 } });
	});

	test('similar arrays should pass with #toEqual', () => {
		expect([1, 2, 3]).toEqual([1, 2, 3]);
	});

	test('similar multi-dimensional arrays should pass with #toEqual', () => {
		expect([1, [2, 3]]).toEqual([1, [2, 3]]);
	});

	test('functions should to be strictly equal if compared by reference', () => {
		const fn = () => {};
		expect(fn).toBe(fn);
	});
});

class Person {
	constructor(name) {
		this.name = name;
	}
}

test('objects with the same properties are equal', () => {
	expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
});

test('objects with different properties are not equal', () => {
	expect({ a: 1, b: 2 }).not.toEqual({ a: 1, b: 3 });
});

test('objects with undefined properties are equal to objects without those properties', () => {
	expect({ a: 1 }).toEqual({ a: 1, b: undefined });
});

test('objects with undefined properties are *not* strictly equal to objects without those properties', () => {
	expect({ a: 1 }).not.toStrictEqual({ a: 1, b: undefined });
});

test('instances are equal to object literals with the same properties', () => {
	expect(new Person('Alice')).toEqual({ name: 'Alice' }); // No requiere la misma referencia en memoria. Solo que sean iguales exactamente
});

test('instances are not strictly equal to object literals with the same properties', () => {
	expect(new Person('Alice')).not.toStrictEqual({ name: 'Alice' }); // Aqui tiene que ser la misma instancia, con esto nos referimos, incluso la misma referencia de memoria.
});

// toBe
// toBeCloseTo -- mas enfocado a numeros
// toBeInstanceOf -- Para clases
// toBeUndefined 
// toContain - 
// toThrow
// toThrowError

test('Asynchronous code accidentally passes', () => {
	// expect.hasAssertions(); // Este hasAsseritons verifica si el test tiene algun expect corriendo
    // En este caso si no se pone async await el test ignora el codigo asyncrono.
	// setTimeout(() => {
        //En 
		// expect(false).toBe(true);
	// }, 1000);
});

const addAsync = (a, b) => Promise.resolve(a + b);

it.fails("fails if you don't use an async function", () => {
	const result = addAsync(2, 3);

	expect(result).toBe(5);
});

it('passes if use an `async/await`',  async() => {
	const result =  await addAsync(2, 3);

	expect(result).toBe(5);
});

async function fetchData() {
	throw new Error('Network error');
}

describe('fetchData', () => {
	it('should throw an error when the promise is rejected',  () => {
		// Use try/catch to verify the error thrown by the asynchronous function
		 expect(fetchData()).rejects.toThrow('Network error');
	});
})

async function fetchUserData() {
	return Promise.reject(new Error('User not found'));
}

describe('fetchUserData', () => {
	it('should reject with an error', () => {
		
		// Test that the promise rejects with the correct error message
	     expect(fetchUserData()).rejects.toThrow('User not found');
	});
});