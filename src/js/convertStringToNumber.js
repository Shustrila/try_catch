export default function convertStringToNumber(str) {
	let number = parseInt(str.trim(), 10);

	if(str === '' && Number.isNaN(number)) throw new TypeError('ERROR');
	return number;
}
