export default function stringOrNumber(str) {
	let number = Number(str) ;

	if(str === "" || str === undefined){
		return "empty string";
	} else if(isNaN(number)) {
		return "This not number";
	} else{
		return "the number";
	}
}
