var motAuSingulier = "pomme";
var nbPomme = prompt("Combien avez-vous de pommes ?");
var resultat;

if (nbPomme > 1 ){
	motAuSingulier = motAuSingulier + "s";
};

console.log(nbPomme + " " + motAuSingulier);