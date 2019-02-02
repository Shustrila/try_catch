import stringOrNumber from "./stringOrNumber"

describe("string or Number", () => {

		test("empty string", () => {
			expect(stringOrNumber("")).toBe("empty string");
		});

	test("string undefined", () => {
		expect(stringOrNumber()).toBe("empty string");
	});

	test("pass the number", () => {
		expect(stringOrNumber("4374")).toBe("this number");
	});

	test("pass the number with string", () => {
		expect(stringOrNumber("43r74")).toBe("this number");
	});

	test("error pass the string", () => {
		expect(stringOrNumber("wefwfe")).toBe("This not number");
	});

});
