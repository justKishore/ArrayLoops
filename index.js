const fruits = ['Apple','Banana','Mango','Orange'];

// 1. For loop
console.log("-- For Loop --")
for(var i=0;i<fruits.length;i++){
    console.log("Fruit "+(i+1)+": "+fruits[i]);
    /*op: Fruit 1: Apple
          Fruit 2: Banana
          Fruit 3: Mango
          Fruit 4: Orange*/
}

// 2. While loop
console.log("-- While Loop --")
var x = 0;
while(x<fruits.length){
    console.log("Fruit "+(x+1)+": "+fruits[x]);
    x++;
}

// 3. Do  while