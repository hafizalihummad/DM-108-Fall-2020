var taInput, divOutput;
var btnRun;

window.onload = function () {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload



function conversion(){

	//Getting Input and converting to 2d array
	console.log(taInput.value);
	var str = taInput.value;
	var tempArray = str.split('\n');
	console.log(tempArray);

	var finalArray = [];
	for (var i = 0; i < tempArray.length; i++) {
		finalArray[i] = tempArray[i].split(',');
	}
	
	return finalArray;
	
}


function FwAlgo() {
	//Implement your solution here
	let converted = []
	converted = conversion();
    console.log(converted);
	let b = converted.length;
	for (k = 0; k < b; k++) {
		for (i = 0; i < b; i++) {
			for (j = 0; j < b; j++) {
				converted[i][j] = parseInt(converted[i][j] || (converted[i][k] && converted[k][j]));


			}
		}
	}
	console.log(converted);
	return converted;
	

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
} 

function runFwAlgo(){
	console.log("Running Floyd Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"

	let txt = FwAlgo();
	for(i = 0; i < txt.length; i++){
		// this is edited last
		a = txt[i];
		divOutput.innerHTML+= "\n[" + a + "]";

	}
	
	//Get Input from 
}//end run
//end sol1
