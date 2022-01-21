const gulp = require("gulp");
console.log("2")
console.log("3")
console.log("4")
console.log("5")
function printTxt(txt){
    conslole.log(txt);

}
printTxt("aa");

function $(elm){
	switch (elm.charAt(0)) {
		case "#":
			return elm.getElementalById(elm.replace(0));
			break;
	
		default:
			break;
	}
}