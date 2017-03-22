
/*
var tableau = [];

var displayElement = function(value, key){
	console.log(value, key);
}
fruits.forEach(displayElement);

for(key in fruits){
	console.log(fruits[key])
}

// rapidité : while > for > foreach

fruits.push("ajout dernier");

fruits.unshift("ajout premier");

// RETIRER DERNIER ELEMENT
fruits.pop();

// RETIRER PREMIER ELEMENT
fruits.shift();
*/


// 1. EXERCICE : Addition
// Faire une boucle qui permet d'additionner toutes ces valeurs
let tableauChiffres = [1,2,3,4,5,6,7,8,9];
let somme = 0;
for(let i = 0; i < tableauChiffres.length; i++){
	somme = somme + tableauChiffres[i];
}

console.log("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = " + somme);

// 2. EXERCICE : Vos meilleurs choix

let tab_acteurs = ["DiCaprio", "Statham", "Depp"];

for (let j = 0; j < tab_acteurs.length; j++){
	console.log("Le numero " + j + " est " + tab_acteurs[j])
}
// test i++/i--

for (let i = 0; i< tab_acteurs.length; i++){
	console.log("i++ : " + i);
}
for (let i = 0; i< tab_acteurs.length; ++i){
	console.log("++i : " + i);
}
// 2.1 Bonus 
let ordinaux = ["zéroième", "premier", "deuxième"];
for (let j = 0; j < tab_acteurs.length; j++){
	console.log("Le " + ordinaux[j] + " est " + tab_acteurs[j])
}

// 3. Exercice : clone

var tab_personnages = ["Mario", "Luigi", "Peach"];
var new_tab = tab_personnages.slice(0, tab_personnages.length);
console.log(tab_personnages);
console.log(new_tab);

new_tab.push("Bowser");
console.log(tab_personnages);
console.log(new_tab);


















