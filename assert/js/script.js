


/* توليد مصفوفة عشوائية طريقة اولى */
/* for (var i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 10));
} 

/* توليد مصفوفة عشوائية طريقة تانية */

var numbers = [1,2,2,3,4,5,6,8,9,7];
/* متغير لايجاد ناتج الجمع */
var sumn= 0;
for (var i = 0; i <numbers.length; i++)
{
    if(numbers[i] % 2 == 0){
       sumn += numbers[i];
    }
} 
console.log( "the result of sum  is" +sumn);


let btnn=document.querySelector('#btn');
let div1=document.querySelector('#demo');
btnn.addEventListener("click", function(){
div1.innerHTML =  "the result of sum  is"+ sumn;

});

var sumnum22 = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] < 5) {
    sumnum22 += numbers[i];
   
  }
}
let btn3=document.querySelector('#btn');
let div2=document.querySelector('#dome2');
btn3.addEventListener("click", function(){
div2.innerHTML =  "the result of sum  is"+ sumnum22;

});

console.log( "the result of sum  is" + "" +sumnum22)





/* the end the part one */




var braaDetails={
    fname:"braa",
    number:1649866,
    age:26,
 email:"braashaban101@gmail.com",
}
///the part one print
console.log(braaDetails)
///the part two print
console.log("the first element  name is"  +  "  " +braaDetails.fname);
console.log("the second element number is"  +" " +braaDetails.number);
console.log("the three element age is"  +" " +braaDetails.age);
console.log("the four element email is"  +" " +braaDetails.email);
document.write("<br>")
// the print on page with document.write



document.write(braaDetails);
document.write("<br>")
document.write("the first element  name is"  +  "  " +braaDetails.fname);

document.write("<br>")
document.write("the second element number is"  +" " +braaDetails.number);

document.write("<br>")
document.write("the three element age is"  +" " +braaDetails.age)

document.write("<br>")
document.write("the four element email is"  +" " +braaDetails.email);



const div3=document.querySelector('#demo3')
const btn4=document.querySelector('#btn')
btn4.addEventListener("click", function(){
  div3.innerHTML =  braaDetails + '<br>'  + 'the name is '+ ' '+ braaDetails.fname+ 
  '<br>'+"the number is"+ ' ' 
  + braaDetails.number+'<br>'+'the age is'+ " "
   + braaDetails.age+ '<br>'+ 'the email is '+" "+ braaDetails.email;
  
  });