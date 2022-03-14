import { checkForName } from "../src/client/js/nameChecker";

describe("Testing", () => {
  test("Test that the input is a valid URL", () => {
      const input = "https://jestjs.io/docs/expect#tobetruthy";
      const output = true;
      expect(checkForName(input)).toBeTruthy();
  })
});


//Example taken from jest documentation: https://jestjs.io/docs/expect#expectnotstringcontainingstring & https://jestjs.io/docs/expect#tobetruthy
