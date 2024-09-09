import { subtraction, sum } from "./functions";

test("sum", () => {
	expect(sum(1, 2)).toBe(3);
})

test("subtraction", () => {
	expect(subtraction(2, 1)).toBe(1);
})