export default function convertStringToNumber(str) {
	str.trim();

	if(str === '' || Number.isNaN(+str)) throw 'ERROR';
	return +str;
}
