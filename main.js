let I = 0;

 let arry = [];
 while (i <= 10) {
   arry.push(i);

   i++;
 }

 console.log(`The numbers: ${arry}`);


 let num = 587999;

 let count = 0;

 while (num != 0) {
   num = Math.floor(num / 10);

   count++;
 }

 num1 = 587999;

 console.log(`The number of digits of the number: ${num1} is ${count}`);

 

 let n1 = 0;
 let n2 = 1;
 let n3;
 let fibnum = 12;
 count = 2;

 while (count <= fibnum) {
   n3 = n1 + n2;
   console.log(n3);
   n1 = n2;
   n2 = n3;

   count++;
 }



let array3 = [];
let i = 1;

while (i <= 100) {
  if (i % 2 != 0) array.push(i);
  i++;
}

console.log(array);


 let input1 = parseInt(prompt("Enter a first number"));
 let input2 = parseInt(prompt("Enter a second number"));
 do {
   console.log(input1);
   input1++;
 } while (input1 <= input2);

 
 const MIN = 1;
 const MAX = 10;

 let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

 let guesses = 0; 
 let hint = ""; 
 let number = 0;
 do {
    
   let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

   
   number = parseInt(input);


   guesses++;


   if (number > secretNumber) {
     alert("To high");
     alert(secretNumber);
   } else if (number < secretNumber) {
     alert("To low");
     alert(secretNumber);
   } else if (number == secretNumber) {
     alert(`Bravo! you're correct after ${guesses} guess(es).`);
   }
 } while (number != secretNumber);



 for (i = 0; i < 10; i++) {
   for (j = 0; j < 9; j++) {
     console.log(`The sum of ${i} and ${j} is: ${i + j}`);
   }
 }



 let array2 = [1, 2, 6, 7, 9];

 for (i = 0; i < array.length; i++) {
   if (array[i] % 2 == 0) {
     console.log(array[i]);
   }
 }



 let arr1 = [2, 4, 6, 7, 8];

 let arr2 = [4, 6, 1, 5, 0];

 let product = [];

for (i = 0; i < arr1.length; i++) {
   product[i] = arr1[i] * arr2[i];

  console.log(` The product of ${arr1[i]} and ${arr2[i]} is: ${product[i]}`);
 }



 let array1 = [1, 2, 70, 3, 10, 5, 0];

 let largest = 0;

 for (i = 0; i < array.length; i++) {
   if (array[i] > largest) {
     largest = array[i];
   }
 }
 console.log(largest);

 let array = [1, 2, 70, 3, 10, 5, 0];
 let minnumber = array[0];

 for (i = 0; i < array.length; i++) {
   if (array[i] < minnumber) {
     minnumber = array[i];
   }
 }

 console.log(minnumber);

 

 
 for (var i2 = 1; i <= 45; i++) {
   if (i % 3 == 0 && i % 5 == 0) {
     console.log("FizzBuzz");
   } else if (i % 3 == 0) {
     console.log("Fizz");
   } else if (i % 5 == 0) {
     console.log("Buzz");
   }
 }



 for (x of cars) {
   console.log(x);
 }



 
 Restaurant = {
   Name: "REMO",
   Cake: "CheeseCake",
   Ingidients: ["Cream Chese", "Sugar", "Vanila Extract"],
 };

 for (elements in Restaurant) {
   console.log(elements);
 }



 for (elements in Restaurant.Ingidients) {
   console.log(Restaurant.Ingidients[elements]);
 }