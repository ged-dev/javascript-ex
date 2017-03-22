// ----------------------------------------------------------- \\
// ----------------EXERCICE : PNJ ------------------- \\
// ----------------------------------------------------------- \\


let numberAlea;

var Character = {
	name : "Leroy",
	age : 21,
	items_to_give : ["Une épée", "Un bouclier", "Du poulet"]

}


for (let i = 0; i<Character.items_to_give.length; i++){
	console.log(Character.name + " possède : " + Character.items_to_give[i]);
}


for(let key in Character){
		console.log(key + " : " + Character[key]);
}

Character.giveItems = function() {
	numberAlea = Math.round(Math.random()*2);
	console.log(numberAlea);
	console.log(Character.name + " vous a donné : " + Character.items_to_give[numberAlea]);
}

Character.giveItems();




// ---------------------------------------------------------- \\
// --------------/ EXERCICE : Shop \------------------------- \\
//				/					\
//			   /					 \
//			  /   _ _ _ _ _ _ _	_ _   \
//			    |	 _				|		
//			    |	| |				|
//			    |	| |				|	
// ----------------------------------------------------------- \\

var ObjectsToSell = [
	{
		name : "epee",
		physic : 5,
		magic : 0,
		minLevel : 3,
		available : true
	},

	{
		name : "hache",
		physic : 10,
		magic : 0,
		minLevel : 12,
		available : true
	},

	{
		name : "sceptre",
		physic : 0,
		magic : 12,
		minLevel : 15,
		available : false

	}
]

ObjectsToSell.displayItems = function(){
	for(let i = 0; i<ObjectsToSell.length; i++){
		for(let key in ObjectsToSell[i]){
			if (ObjectsToSell[i].available){
				console.log(key + " : " + ObjectsToSell[i][key]);
			}
		}
		
	}
	console.log("----------------");	
}


ObjectsToSell.displayItems();


ObjectsToSell.displayItemsMinLevel = function(){
	for(let i = 0; i<ObjectsToSell.length; i++){
		for(let key in ObjectsToSell[i]){
			if (ObjectsToSell[i].minLevel >= 10){
				console.log(key + " : " + ObjectsToSell[i][key]);
			}
		}
	console.log("----------------");	
	}	
}
console.log("Items minLevel : 10");
//ObjectsToSell.displayItemsMinLevel();

// ----------------------------------------------------------- \\
// ----------------EXERCICE : Personnage ------------------- \\
// ----------------------------------------------------------- \\

var Weapon = {
	name : "épée",
	damage : 10
}

var MainCharacter = {
	name : "Generald",
	level : 24,
	life : 10,
	weapon : Weapon.name,
	items_to_give : ["Une épée", "Un bouclier", "Du poulet"]
}



MainCharacter.attack = function(){
	console.log(MainCharacter.name);
	console.log(MainCharacter.weapon);
}


MainCharacter.attack();








