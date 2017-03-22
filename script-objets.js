var monOBJ = {};
var monOBJ = new Object(); // Autre écriture

var monObj = {
	//nomClef : valeur,
	matiere : "bois",
	hauteur : 1,
	largeur : 2,
	couleur : "blue",
	dessus	: ["sel", "poivre", "sucre"],
	vis : {
		tailles : 10,
		couleur : "#555",
	},
	tape : function(){
		console.log("BRUIT");
	}
};

console.log(monObj);
console.log(monObj.hauteur);
console.log(monObj.tape());
console.log(monObj.vis.taille);

var Chat = {
	nom 	: "Poupousse",
	couleur : "#F50",
	size 	: 20,
	age		: 8,
	children : ["Papousse", "Pipousse"],
	speak : function(){
		console.log("Miaou")
	}
};

Cat.jump = function(){
	console.log("Saute pouf !");
}

var premierChat = new Object.create (Cat);
var secondChat = new Object.create (Cat);

var premierChat.name = "Bastien";
var secondChat.name = "Gerald";

//console.log(premierChat instanceof Cat);

console.dir(Object.getPrototypeOf(premierChat) );
console.dir(Object.getPrototypeOf(secondChat) );


//Lister les propriétés d'un Objet
for(let key in pool[i]){
	new[key] = pool[i][key];
	console.log(key, pool[i][key])
}

