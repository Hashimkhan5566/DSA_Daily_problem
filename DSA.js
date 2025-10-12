let string = "hoome";
let reversed = "";
for(let i=string.length-1; i>=0; i--){
    reversed+=string[i];
    if(reversed===string){
        console.log("this is palindrome.");

    }
    else{
        console.log("this is not palindrome",reversed)
    }
}
console.log("this is reverse", string);
//the second problem
let mango = 10;
let apple = 5;
console.log(mango+apple); 
// You are given marks = 33. How do you check if a student has passed or failed (passing marks = 40)?
//we uisng condition
let marks =prompt("enter your number:");

let mark = parseInt(marks);
if(marks>40){
    console.log("you are passed");

}
else if(marks<40){
    console.log("you are fail")

}
else{
   console.log("you are best in studies tryagain for nxt time.");  
}
// Variable x = 8. How do you decide if it is even or odd?
let x1 = prompt("enter your choice number:")

let x = parseInt(x1);
if(x%2==0){
    console.log("this is  even");
}
else if(x%2==1){
    console.log("this is odd");
}
else{
    console.log("try again");
}
//You have two numbers, a = 10 and b = 15. Which is greater?
let a =10;
let b =15;

if(a>b){
    console.log("the a is greater than b.");

}
else if(b>a){
    console.log("the b is greater than a.");
}
else{
    console.log("the a and b are equal.");

}
//You have two numbers, p = 12, q = 12. How do you check if they are equal or not?
let p = 12;
let q = 12;
if(p==q){
    console.log("the p and q are equal equal.");

}
else{
    console.log("they are not equal.");
}
// You are given temperature = 42. How do you check if it is hot or cold? (Assume above 30 = hot).

let temp = 42;
if(temp>30){
    console.log("the temp is above the 30 to open the AC.");
}
else{
    console.log("the AC are stop because the tempertaure is low.");
}
// You have wallet = 500. Price of a burger is 300. Can you buy it?

let wallet = parseInt(prompt("what your budget?"));
let price_burger = parseInt(prompt("what is the burger price?"));
if(wallet>=500 && price_burger<=300){
    console.log("you can buy it");

}
else{
    console.log("you are not buy it because your budgets is low or end");
}

// A shopkeeper has oranges = 50. A customer buys 20. How many are left?
let shopkeeper_oranges = 50;
let customer_buys = 20;
console.log("we used the - operator", shopkeeper_oranges-customer_buys);

// map method and filter and for each

// let array = [123,24,54,4234];

// let arr = array.map(x=> x*x)
// /
// console.log(arr);
// //filter
// let array32 = [12,44,43,5546,332];

// let arr23 = array32.filter((a => a>130)
// )
// console.log(arr23);

// A student has scored marks = 92. Is it grade A (>90) or not?

let student_marks = prompt("enter your number:");

if(student_marks>90){
    console.log("they grade A");
}
else if(student_marks==80 || student_marks>70){
    console.log("the grade B");
}
else{
    console.log("the grade c and D");
}
//You have three numbers: 10, 20, 30. Which is the largest?

let largest  = Math.max(10,30,20);
console.log("the largest number", largest);

//you have three number: 10,20,30. which is the largest?

let a1 = 10;
let b1 = 20;
let c1 = 30;

if(a1>b1){
    console.log("this is largest number:",a1);
}
else if(b1>c1){
    console.log("this is largest number:",b1);
}
else if(c1>a1){
    console.log("this is largest number:",c1);
}
else{
    console.log("this is greater.");


}
//You have n = 1234. How many digits does it have?
// let number  = [1234];
// let count = 0;
// for(let num of number){
//     count+=num;
//     count++;
// }
// console.log("this is number of num that is contain.", count);
// console.log("this is the count", num);

///You have n = 1234. How many digits does it have?
let nom = 1234;
let str = nom.toString();
console.log(str.length);

// A bus has 40 seats. 35 are filled. Is the bus full, empty, or has seats left?
let bus_seats = prompt("enter the bus seats:");
let full_seats = prompt("enter the full seats:");


let total  = parseInt(bus_seats);
let filled = parseInt(full_seats);
if(filled===total){
    console.log("the seats is full;");

}
else if(total==0){
    console.log("the seats is empty");
}
else if(filled<total){
    console.log("the reamin seats in bus:",total-filled);
}
else{
    console.log("the bus starts");
}
// A student scores: Math = 60, Science = 70, English = 80. How do you calculate the average marks and check grade?
let students = {
    math:60,
    english :80,
    science : 70
}
    let sum = students.math+students.english+students.science;
    marks=sum/3;
    if(marks>=90){
        console.log("gradeA");
    }
    else if(marks==80){
        console.log("grade B");
    }
    else{
        console.log("other grade");
    }
console.log(marks);
// You have n = 7. How do you print the first 7 multiples of it (7, 14, 21 …)?
let multiply = prompt('enter your choice number');
let table = parseInt(multiply);
for(i=1; i<=7; i++){
    console.log(`7X${i}: ${7*i}`);
}
// You are given a number n = 28. How do you check if it is a perfect number?
let num = 10;
let sam = 0;
for(i =1; i<num; i++){
    if(num%i==0){
        sam+=i;
    }

}
if(sam==num){
    console.log("this is perfect");
}
else{
    console.log("this is not perfect");
}
// Take a number n. Print all numbers from 1 to n.

// Print all even numbers between 1 and 50.

// Find the sum of the first 10 natural numbers.

// Given a number n, print its multiplication table (till 10).

// Find the factorial of a number n.

// Count how many digits are in a given number.

// Find the sum of digits of a number.

// Reverse a number (e.g., 123 → 321).

// Check if a number is positive, negative, or zero.

// Find the largest of three numbers.
let n = 23;
for(i=0; i<=23; i++)
{
    console.log(i);
}
//2
for(let j=0; j<=50; j++){
    if(j%2==0){
        console.log(j);
    }
}
//3
for(let n=1; n<=10; n++ )
{
    console.log(n);
}

//4
let mul = prompt("enter your choice mul number:");
let mul12 = parseInt(mul);
for(i=1; i<=10; i++){
    console.log(`${mul12}X${i} : ${mul12*i}`);
}

//5 
let number = prompt("enter your choice number:");
let namber = parseInt(number);

let fact = 1;
while(namber>0){

    fact*=namber;
    namber--;
}
console.log("the factorial", fact);
let digit = 12345;
let stri = digit.toString();
console.log(stri.length);

//6
let nomber = 23;
let nomber2 = 45;
let nomber3 = 56;

if(nomber>nomber2){
    console.log(nomber);
}
else if(nomber2>nomber3){
    console.log(nomber1);
}
else if(nomber3>nomber){
    console.log(nomber3);
}

console.log(Math.max(nomber, nomber2, nomber3));

//Reverse a number (e.g., 123 → 321).
let nam  = 123;
let original = nam;
let reverse = 0;
while(nam>0){
   let digit =  nam%10;
   reverse = reverse*10+digit;
   nam = Math.floor(nam/10);
}
console.log("this reverse:",reverse);
console.log(original==reverse);

//🟠 Intermediate Level (Condition + Loop + Math)

// Check if a number is a prime number.

// Find all factors of a number n.

// Check if a number is Armstrong (sum of cubes of digits = number).

// Check if a number is Perfect Number (sum of divisors = number).

// Print the Fibonacci series up to n terms.

// Find the greatest common divisor (GCD) of two numbers.

// Find the least common multiple (LCM) of two numbers.

// Count how many even and odd digits are in a number.

// Find the power of a number (a^b) without using the power operator.

// Calculate the average of n numbers entered by the user.
//\\//\\\\\\\\\\||||||||||||\\\\\||||||///////|||||||||||\

// Check if a number is a prime number.
let numbeer  = prompt("enter your prime number:");

let isprime = true;
if(numbeer<=1){
    isprime = false;
}
else{
    for(let i=2; i<=Math.sqrt(number); i++){
        isprime = false;
        if(number%i==0){
            isprime = false;
            break;
            
        }
    }

}
if(isprime){
    console.log(numbeer, "this is prime");

}
else{
    console.log(numbeer, "this is not prime number");
}
// Check if a number is Armstrong (sum of cubes of digits = number).
let cubic  = prompt("enter your choice armstrong:");
let nams = parseInt(cubic);
let originaal = cubic;

let suum = 0;
while(cubic>0){
    let digit = cubic%10;
    suum+=digit**3; 
    cubic = Math.floor(cubic/10);
}
if(suum===nams){
    console.log("this is armstrong");
}
else{
    console.log("this is not armstrong");
}
