let ground = []; // Initialize array
for (let i = 0 ; i < 100; i++) {
    ground[i] = []; // Initialize inner array
    for (let j = 0; j < 100; j++) { // i++ needs to be j++
        ground[i][j] = Math.floor(Math.random() * 2);
    }
}
console.log('this is random 100*100 matrix');
console.log(ground);
function valueOfMatrix(num){
  var arr = []; // Initialize array
for (var i = 0 ; i < num; i++) {
    arr[i] = []; // Initialize inner array
    for (var j = 0; j < num; j++) { // i++ needs to be j++
         arr[i][j]= ground[i][j];
        
    }
}
  
return arr;

}
function FwAlgo(iteration) {
    //Implement your solution here
    itrtn = parseInt(iteration);
	let converted = [];
	converted = valueOfMatrix(itrtn);
    
	let b = converted.length;
	for (k = 0; k < b; k++) {
		for (i = 0; i < b; i++) {
			for (j = 0; j < b; j++) {
				converted[i][j] = parseInt(converted[i][j] || (converted[i][k] && converted[k][j]));


			}
		}
    }
    console.log("this is result" + itrtn);
	console.log(converted);
	return converted;
	

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}

function runFwAlgo(){
	var x1=[],t1,y1=[];
	console.log("Running Floyd Warshall")
    //divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
    for(let i = 4; i<=100;i++){
    const t0 = performance.now();
    var result = FwAlgo(i);
    const t1 = performance.now();
	const per = t1-t0;
	x1.push(i);
	y1.push(per);
    
	}
	
	var layout={
 	xaxis:{title:'N'},
 	yaxis:{title:'Time taken (miliseconds)'}
 };
Plotly.plot('graph',[{
	x:x1,
	y:y1,
	type:'line'
}],layout);

    }
	//Get Input from 
//end run
//end sol1
