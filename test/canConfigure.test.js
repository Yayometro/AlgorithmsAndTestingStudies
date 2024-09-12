import { describe, it, expect } from "vitest";
import { canConfigure } from "../src/canConfigure";

describe("canConfigure", () => {
  it("should be a function", () => {
    expect(typeof canConfigure).toBe("function");
  });
  it("both arg should be an string", () => {
    expect(() => canConfigure()).toThrow("arg is not a string");
    expect(() => canConfigure(1)).toThrow("arg is not a string");
  });
  it("both arg should have the same length", () => {
    expect(() => canConfigure("abc", "ah")).toThrow(
      "length is not the same for both args"
    );
    expect(() => canConfigure("abcdedw", "")).toThrow(
      "length is not the same for both args"
    );
  });
  it("Should return a boolean", () => {
    expect(typeof canConfigure('edc', 'edc')).toBe('boolean');
  });
  it('Character could not be asigned to two different characters', () => {
    expect(canConfigure('XXX', 'XXY')).toBeFalsy()
  });
  it('from and to should have the same order in the transformation of the caracters', () => {
    expect(canConfigure('XBOX', 'XXOB')).toBeFalsy()
    
  });
  it('from and to should have the same relationship betwen characters', () => {
    expect(canConfigure("XBOX", "XXOB")).toBeFalsy();
    expect(canConfigure('BAL', 'LIB')).toBeTruthy()
  });
});

//Verificar que sea una función
//Verificar que sea string
// Verificar que from and to tengan el mismo lenght
//Mapear cada caracter
//ordenarlo y asociarlo
