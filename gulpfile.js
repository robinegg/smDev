const gulp = require("gulp");
console.log("2")
console.log("3")
console.log("4")
console.log("5")
function printTxt(txt) {
	conslole.log(txt);

}
printTxt("aa");

function $(elm) {
	switch (elm.charAt(0)) {
		case "#":

			return elm.getElementalById(elm.replace(0));
			break;

		case ".":

			return elm.getElementalByClassssss(elm.replace(0));//어쩌구 저쩌구..
			break;

		case "":

			return elm.getElementalName(elm);//어쩌구 저쩌구22..
			break;

			case "":


			return elm.getElementalName(elm);//어쩌구 저쩌구33..

			return elm.getElementalName(elm);//어쩌구 저쩌구44..
			return elm.getElementalName(elm);//어쩌구 이슈1..

			return elm.getElementalName(elm);//이슈2..

			break;


		default:
			return "어쩌구 저쩌구.."

			break;
	}
}