

//Ejemplo de catching
function isUnique(arr) {
  const cache = {};
  //handleo el caso que el array tenga length de uno
  cache[arr[0]] = 1;
  const result = [arr[0]];
  // cuando ya sea mayor a dos de length
  for (let index = 1; index < arr.length; index++) {
    const element = arr[index];
    if (!cache[element]) {
      cache[element] = 1;
      result.push(element);
    }
  }
  return result;
} // esta solución es lineal o menor a lineal 

console.log(isUnique([2, 2]));
describe("isUnique", () => {
  //   Ya me aseguré que hay data en el array que estan sorteados
  it("array of one number should return the number itself inside the array", () => {
    expect(isUnique([2])).toStrictEqual([2]);
  });
  it("output array should not have duplicate numbers in comparison of the input array", () => {
    expect(isUnique([2, 2])).toStrictEqual([2]);
  });
  it("my array should have unique numbers", () => {
    const res = isUnique([1, 2, 2, 3, 4, 3, 4, 5, 1]);
    console.log("res", res);
    expect(isUnique([1, 2, 2, 3, 4, 3, 4, 5, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});


const factorial = (n) => {
  // Calculations: n * (n-1) * (n-2) * ... (2) * (1)
  return factorial;
};

factorial(35);

factorial(36); // factorial(36) = factorial(35) * 36;

const times10 = (n) => n * 10
const createCheckerTimes10 = (t10) => {
    const cache = {}; // Esta cache persiste en el closure
    return () => {
      if (cache[t10]) {
        console.log("Already calculated");
        return cache[t10];
      } else {
        console.log("No calculated yet");
        cache[t10] = t10;
        return cache[t10];
      }
    };
  };
  
  const checkerTimes10 = createCheckerTimes10(times10(5));

  console.log(checkerTimes10())
