import { describe, it } from "vitest";

function permutations(str) {
  let arr = str.split(""),
    len = arr.length,
    perms = [],
    rest,
    picked,
    restPerms,
    next;

  if (len == 0) return [str];

  for (let i = 0; i < len; i++) {
    rest = Object.create(arr);
    picked = rest.splice(i, 1);

    restPerms = permutations(rest.join(""));

    for (let j = 0, jLen = restPerms.length; j < jLen; j++) {
      next = picked.concat(restPerms[j]);
      perms.push(next.join(""));
    }
  }
  return perms;
}

describe("", () => {
  it("", () => {

  })
})