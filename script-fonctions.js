var a = prompt("A = ?");
var b = prompt("B = ?");

var soustraction = function(a, b){
	return Number(a) - Number(b);
}

var division = function(a, b){
	return Number(a) / Number(b);
}

var multiplication = function(a, b){
	return Number(a) * Number(b);
}

var c = prompt("Valeur : ");
var d = prompt("Pourcentage : ");

var pourcentage = function(c,d){
	return (c/100)*d;
}

var distance = prompt("Distance parcourue :");
var nbHeure = prompt("Nombre d'heures :");

var calcul_vitesse = function (a,b){
	return(distance/nbHeure);
}

console.log("Soustraction : " + a + "-"+ b + "  = " + soustraction(a,b));
console.log("Multiplication : " + a + "*"+ b + "  = " + multiplication(a,b));
console.log("Division : "+ a + "/"+ b + "  = " + division(a,b));

console.log("Pourcentage : "+ c + "|"+ d + "%  = " + pourcentage(c,d));
console.log("Calcul vitesse : "+ distance + "/"+ nbHeure + " = " + calcul_vitesse(distance, nbHeure) + " Km/h");

