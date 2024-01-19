                                // ********************************************************


                                //               Chapter 35 - 37 (Functions)


                                // ********************************************************






// 1. Code the first line of a function displayAlert.

function displayAlert() {
}



// 2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.



function askName() {
    var username = prompt("Enter name");
    console.log(username)

  }

askName()






// 3. Code a function that calls 2 other functions.


function funct() {
  first();
  second();
}
function first(){
  console.log("first function")
}
function second(){
    console.log("second function")
}
funct();

// 4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.


function x(){
  var a=prompt("Enter Name")
  console.log(a);
}
x();



// 5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.



function concat(a,b,c){
  var result=a+b+c;
  console.log(result)

}
concat('a','b','c')



// 6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.


function par(A,B){
  var result=A+B;
  console.log(result)
}
par("Hello","World");


// 7. Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.



function Multiply(x,y,z){
  var result= x*y*z;
  console.log(result)
}
Multiply(2,3,4);



// 8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.


function avg(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
      sum +=  array[i];
  }
  return sum / array.length;
}

console.log(avg([1, 2, 3, 4, 5]));



// 9. Write a JavaScript function that takes two parameters and returns their sum.
function sum(a,b){
  var result=a+b;
  console.log(result)
}
sum(1,3)



// 10. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.




function avg(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
      sum +=  array[i];
  }
  return sum / array.length;
}
var avg=avg([1, 2, 3, 4, 5]);
console.log(avg);




// 11. You have to capture the returned value from a function and store it in a variable?


function cap(a,b){
  return a+b;
}
var result=cap(12,23)
console.log("the capture value",result)





// 12. Write a function which tells letter counts of (word).


function count(word) {
    if (!word || word.length === 0) {
      return 0;
    }
    var wordsArray = word.split(" ");
    return wordsArray.length;
  }
  var str = " a v b b b b b b b b b b b ";
  console.log('Number of words : ' + count(str));

  




// 13. Write a function to set (year) in date object.


function set(date,year){
  date.setFullYear(year);
}
var dat=new Date();
 console.log(dat)
 set(dat,2024)
console.log(dat)




// 14. Write a function which tells the age of a person who Born on (dateOfBirth)


var a=prompt("Enter the date ")
var dob = new Date(a);
var today = new Date();
var age = today - dob;
var ageDate = new Date(age);
var birthYear = ageDate.getFullYear();
var years = birthYear - 1970;
var ageYears = Math.abs(years);
console.log("Age of  person: " + ageYears  );



// 15. Write a function which tells the presense of (word) in an 
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false




function presense(word,array){
    return array.includes(word)
}

var array1 = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
var search=prompt("Enter the Name  ",);
console.log(presense(search,array1))




// 16. Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10)


function rep(str){
    return str.repeat(10);
}
var repeatstr=rep("abcde");
console.log(repeatstr);





// 17. write a function which reverse array = ['a','b','c','d','e'] Hint: arr.reverse()


const array = ['a','b','c','d','e']
array.reverse()
console.log(array)
