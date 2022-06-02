/**  
 * a) Write a JavaScript program to find the diagonal of a square where the length of each side is 9.
**/
let a = 9, d, b, c;

d = (Math.sqrt(2) * 9).toFixed(2);
// console.log(`Diagonal of square with side length=${a} is: \n${d.toFixed(2)} `)
document.getElementById('part1').innerHTML += `<li> Diagonal of square with side length a=${a} is: <b>${d}</b></li> `


/**
 * b) Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7. 
 **/

a=5, b=6, c=7;
let s, A;

//Semi perimeter
s = (a+b+c)/2;
A = Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2)
//Area Herons formula

document.getElementById('part1').innerHTML += `<li>Area of triangle with three sides are a=${a}, b=${b} and c=${c} is:<b> ${A} </b></li> `


/**
 * c) Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4. 
 **/

const PI = 3.14;
let Cr, r=4;

Cr = 2*PI*r;
A = PI*Math.pow(r,2);

document.getElementById('part1').innerHTML += `<li>Circumference of circle with radius r=${r} is:<b> ${Cr} </b> and surface area <b> ${A} </b></li> `


/***** ASSIGMENT (Conditional Statements & Loops): *****/
/**
 * a) Write a JavaScript program that accepts two integers and displays the larger of the two.
 **/

 let num1 = parseInt(prompt('Enter the first Integer '));
 let num2 = parseInt(prompt('Enter the second Integer '));

 let larger = num1 > num2 ? `${num1}` : `${num2}`;

 document.getElementById('part2').innerHTML += `<li>From entered integers: ${num1} and: ${num2}, larger of two is <b> ${larger} </b></li> `

/** 
 * b) Write a JavaScript program that checks whether an integer is an even or an odd number.
 **/

 let even = 
 document.getElementById('part2').innerHTML += `<li>Number <u>${larger}</u> is <b>${larger%2 === 0 ? "even":"odd"}</b></li> `