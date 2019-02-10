import convertStringToNumber from './convertStringToNumber.js';

describe('TEST: convert string to number', () => {

	test('integer', () => {
		expect(convertStringToNumber('55')).toBe(55);
	});

	test('line with unnecessary indentation', () => {
		expect(convertStringToNumber(' 67   ')).toBe(67);
	});

	test('the hex number system', () => {
		expect(convertStringToNumber('4F5')).toBe(4);
	});

	test('a string with the number', () => {
		expect(convertStringToNumber('0xA42')).toThrow();
	});

	test('a string with the number', () => {
		expect(convertStringToNumber(' weyuo67we ')).toThrow();
	});

	test('empty string', () => {
		expect(convertStringToNumber('')).toThrow();
	});

});
