function pizzaOven(crustType, sauceType, cheeses, toppings) {

    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    }

    
}

var firstPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],  ["mushrooms", "olives", "onions"]);

var secondPizza = pizzaOven("Cracker Crust", "Spicy Red Sauce", ["Provolone Cheese","Gouda"],["Sausage", "Onion"]);

var thirdPizza = pizzaOven("Thick Crust Pizza", "Buffalo Sauce", ["Parmesan Cheese","Gruyere"], ["Black olives","Green pepper"]);

console.log(firstPizza, secondPizza, thirdPizza);
console.log('Hello');

function randomPizza() {

    var  crustTypes = ["hand tossed", "Cracker Crust", "Thick Crust Pizza"];
    var  sauceTypes = ["marinara", "Spicy Red Sauce", "Buffalo Sauce"];
    var  cheeseOptions = [["mozzarella", "feta"], ["Provolone Cheese", "Gouda"], ["Parmesan Cheese", "Gruyere"]];
    var  toppingOptions = [["mushrooms", "olives", "onions"], ["Sausage", "Onion"], ["Black olives", "Green pepper"]];

    var  randomCrustType = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    var  randomSauceType = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    var  randomCheeses = cheeseOptions[Math.floor(Math.random() * cheeseOptions.length)];
    var  randomToppings = toppingOptions[Math.floor(Math.random() * toppingOptions.length)];


    return {
        crustType: randomCrustType,
        sauceType: randomSauceType,
        cheeses: randomCheeses,
        toppings: randomToppings
    };
}


const randomPizza1 = randomPizza();
const randomPizza2 = randomPizza();
console.log(randomPizza1);
console.log(randomPizza2);
