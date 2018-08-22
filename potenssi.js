window.onload = laske(); 

function laske() {
	var arr = new Array();
	for (x=10;x>0;x--) {
		var temp = myFunction(x);
		arr.push(temp);
	}
	document.getElementById("kertsi").innerHTML = arr;
	tulostaTakaperin(arr);
	document.getElementById("author").innerHTML = "<cite>Responsive HTML5+CSS3+Javascript demo by Jere Sumell</cite>";
	
}
function tulostaTakaperin(arr) {
		arr.reverse();
		document.getElementById("kertsiBackward").innerHTML = arr;
	
}

function myFunction(x) {
	if (x > 0) {
		return 2*myFunction(x-1);
	}
	return 1;

}

