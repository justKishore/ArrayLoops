const fruits = ['Apple','Banana','Mango','Orange'];

// 1. For loop
console.log("-- For Loop --")
for(var i=0;i<fruits.length;i++){
    console.log("Fruit "+(i+1)+": "+fruits[i]);
    /*op: 
     Fruit 1: Apple
     Fruit 2: Banana
     Fruit 3: Mango
     Fruit 4: Orange
    */
}

// 2. While loop
console.log("-- While Loop --")
var x = 0;
while(x<fruits.length){
    console.log("Fruit "+(x+1)+": "+fruits[x]);
    /* op: 
     Fruit 1: Apple
     Fruit 2: Banana
     Fruit 3: Mango
     Fruit 4: Orange
    */
    x++;
}

// 3. Do  while
console.log("-- Do While Loop --");
var x =0;
do{
    console.log("Fruit "+(x+1)+": "+fruits[x]);
    /* op: 
     Fruit 1: Apple
     Fruit 2: Banana
     Fruit 3: Mango
     Fruit 4: Orange
    */
    x++;
} while(x<fruits.length);

// For in (returns key of array or object)
var fruitList = "";
 for ( var i in fruits){
     console.log("i is: "+i);
     /* op: 
     i is: 0
     i is: 1
     i is: 2
     i is: 3
     */
    fruitList += i+ ": "+ fruits[i] + "\n";
 }
console.log(fruitList);
/* op:
 0: Apple
 1: Banana
 2: Mango
 3: Orange
*/

var city = {"B":"Berlin","N":"Nairobi","T":"Tokyo"};
var cityList = "";
for (var key in city) {
    cityList += key + ": " + city[key]+ "\n";
    }
console.log(cityList);
/* op:
 B: Berlin
 N: Nairobi
 T: Tokyo
*/

// For of (returns value of array, map, set and Arguments object)
for(var value of fruits){
    console.log("Value is: "+value);
    /* op:
     Value is: Apple
     Value is: Banana
     Value is: Mango
     Value is: Orange
    */
}
/*
for(var value of city){
    console.log("City is:"+value); // Not possible (city is not iterable)
}
*/

// For each (calls a function (a callback function) once for each array element)
var fruitNewList = "";
fruits.forEach(fruitFunction);
console.log("Fruits: \n"+fruitNewList);
/* op:
 Fruits: 
 Apple
 Banana
 Mango
 Orange
*/
function fruitFunction(value, index, array) {
    fruitNewList += value + "\n";
}

Object.entries(city).forEach(cities => {
    const [key, value] = cities;
    console.log(key, value);
});

/* op:
 B Berlin
 N Nairobi
 T Tokyo
*/
