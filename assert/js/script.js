
/* for (var i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 10));
} */
var numbers = [1,2,2,3,4,5,6,8,9,7];
var sumn= 0;
for (var i = 0; i <numbers.length; i++)
{
    if(numbers[i] % 2 == 0){
       sumn += numbers[i];
    }
} 
console.log( "the result of sum  is" +sumn);
document.write("the result of sum  is" +sumn+"<br>") ;


var sumnum22 = 0;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] < 5) {
    sumnum22 += numbers[i];
   
  }
}
document.write("the result of sum  is" + "" +sumnum22 +"<br>");
console.log( "the result of sum  is" + "" +sumnum22)


////

/* var n=[]
for (let i = 0; i <10; i++) {
   n.push(Math.floor(Math.random()*10))
    console.log(n)
} */



/* const numbers = [15, 2, ,10,15 ,1, 15];
document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.min(num);
}
 */



/* for (var i = 0; i < numbers.length; i++)
{
 // index laste of 5
    var sumnum22 = 0;
    if(numbers[i] < 5)
    {
        sumnum22 += numbers[i];
        document.write("the result of sum  is" + "" +sumnum22 +"<br>");
        console.log( "the result of sum  is" + "" +sumnum22)
    }
} 
 */

// the part b
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

// the print on page with document.write
document.write(braaDetails);
document.write("/*/*/*/*/*");
document.write("<br>")
document.write("the first element  name is"  +  "  " +braaDetails.fname);
document.write("/*/*/*/*/*");
document.write("<br>")
document.write("the second element number is"  +" " +braaDetails.number);
document.write("/*/*/*/*/*");
document.write("<br>")
document.write("the three element age is"  +" " +braaDetails.age)
document.write("/*/*/*/*/*");
document.write("<br>")
document.write("the four element email is"  +" " +braaDetails.email);
document.write("/*/*/*/*/*");