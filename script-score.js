var score = prompt("Quel est votre score ?");
var resultat;

if (score <= 50){
	resultat = "C"
}else if (score < 90){
	resultat = "B"
}else{
	resultat = "A"
}

console.log(resultat);