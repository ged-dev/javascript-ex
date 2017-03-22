


for (let i = 0; i<21; i++){
	if (i%2 === 0){
		console.log(i + " est pair");
	}else{
		console.log(i + " est impair");
	}
}

for (let i = 0; i<11; i++){
	console.log(i*9)
}


for (var i = 0; i<100; i++ ){
	if (i<65){
		console.log("Grade F")
	}else if (i<70){
		console.log("Grade D")
	}else if (i<80){
		console.log("Grade C")
	}else if (i<90){
		console.log("Grade B")
	}else {
		console.log("Grade A")
	}
}

var etoile = "";

for (var i=1; i<6; i++){
		etoile = etoile + " *"
		console.log(etoile);
	
}
