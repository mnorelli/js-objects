function monkey(name,species,foodsEaten){
    this.name = name;
    this.species = species;
    this.foodsEaten = foodsEaten;
    this.eatSomething = function(thingAsString){
        console.log(this.name + " ate some " + thingAsString);
    }
    this.introduce = function(){
        console.log("Hi, I'm a " + this.species + 
        " called " + this.name + 
        ", and I eat " + this.foodsEaten)
    }
    };

var monkey1 = new monkey("Ben","bonobo","grapes");
var monkey2 = new monkey("Sam","chimp","bananas");
var monkey3 = new monkey("Flo","baboon","fruit rollups");

monkey1.introduce()
monkey2.eatSomething("grass")
monkey3.introduce()