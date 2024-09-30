/*Es hora de crear algunas pizzas increíbles. Sigue estas sencillas instrucciones:

Crea una función llamada `pizzaOven`. 
¡Asegúrate de incluir los detalles de tu pizza como el tipo de corteza, salsa, quesos y salsas!
Crea una función llamada `pizzaOven` que devuelva un objeto JavaScript (¡una deliciosa pizza!)
Crea una pizza con: «estilo Chicago», «tradicional», [«mozzarella»] y [«pepperoni», «salchicha»]
Crea una pizza con: «lanzada a mano», «marinara», 
[«mozzarella», «feta»] y [«champiñones», «aceitunas», «cebollas»]
¡Crea otras dos pizzas con tus ingredientes favoritos y deja volar tu imaginación!*/

function pizzaOven(estilo, corteza, quesos, agregados, salsas) {
    var pizza = {};
    pizza.estilo = estilo;
    pizza.corteza = corteza;
    pizza.quesos = quesos;
    pizza.agregados = agregados;
    pizza.salsas = salsas;
    return pizza;
}
    
var p1 = pizzaOven("Casero","Rellena", "Cheddar", "","Tradicional");
console.log(p1);

var p2 = pizzaOven("Chicago", "Tradicional", "Mozzarella", ["Peperoni", "Salchicha"], "Barbacoa");
console.log(p2);

var p3 = pizzaOven("Lanzada a mano", "Tradicional", "Mozzarella", ["Feta", "Champiñones", "Aceitunas", "Cebollas"], "Marinara");
console.log(p3);

var p4 = pizzaOven("Napolitana", ["Fina", "Suave"], "Mozzarella de Búfala", "Albahaca", "Tradicional");
console.log(p4);

var p5 = pizzaOven("Siciliana", ["Gruesa", "Esponjosa", "Rectangular"], "Mozzarella", ["Anchoas", "Hierbas", "Cebollas"], "Salsa de Tomate");
console.log(p5);

