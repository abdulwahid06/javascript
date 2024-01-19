
                                // ***********************************************************

                                //                 Chapter 31 - 34 (Date & Time)

                                // ***********************************************************






// 1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.


var dateofobject = new Date();
alert(dateofobject)




// 2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.


var dstr = new Date().toString();
alert(dstr)



// 3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.


var d = new Date();
var day = d.getDay();
alert(day)



// 4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.

var d = new Date();
var a= d.getDay();
var dayname=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
console.log("Today the week day is  :  " + dayname[a]);



// 5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.

var currentDate = new Date();
var a=currentDate.getFullYear();
console.log(a)
var b=currentDate.getMonth();
console.log(b)
var c=currentDate.getDate();
console.log(c)
var d=currentDate.getHours();
console.log(d)
var e=currentDate.getMinutes();
console.log(e)
var f=currentDate.getSeconds();
console.log(f)
var g=currentDate.getMilliseconds();
console.log(g)
console.log(currentDate)





// 6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.


var later = new Date(2020, 11, 0);
alert(later)





// 7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.


var a=new Date(1922,2,2)
alert(a)



// 8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.


alert(Date.parse('1980-01-01'));





// 9. How do you change the year of a date in JavaScript?


var mydate = new Date('1980-01-01'); 
mydate.setFullYear(2023);
console.log(mydate);




// 10. Write a JavaScript function to change the month of a given date to January.



function jan(date){
    if(!(date.getTime())){
        console.log("Not correct one ")
        return;
    }
    date.setMonth(0);
    return date;
}
var a= new Date('1980,2,2')
var up_date=jan(a)
console.log(up_date)



// 11. What is the method to change the day of the week for a specific date in JavaScript?


var spec_date = new Date(2022, 0, 15); 
var dayoftheweek = spec_date.getDay();
console.log(' the Day of  week is :', dayoftheweek); 





// 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)


var change= prompt("the change you want in time");
var Input = parseFloat(change);
var today = new Date();
var current_Time = today.toLocaleTimeString();
var hours = today.getHours(current_Time);
var alarm = today.setHours(hours + Input); 
console.log(alarm);









// 13. Write a JavaScript function to add a specific number of   hours to a given time.


var currentTime = new Date();
console.log("this is current time :",currentTime)
var hoursToAdd = 10;
currentTime.setHours(currentTime.getHours() + hoursToAdd);
console.log("Updated time after addding 10 hours:", currentTime.toLocaleTimeString());







// 14. You have to create a age calculator in JavaScript.

function calculator() {
var dateofbirth = prompt("Enter the Date of birth 'formate(YYYY-MM-DD)':" );

 
  if  (!(dateofbirth)) {
    alert("Enter the correctdate");
    return;
  }

  var Year = new Date().getFullYear();

  var age = Year - parseInt(dateofbirth);
alert("Your age is: " + age  );
return age;
}
calculator();



                                // ***********************************************************

                                //            Chapter 31 - 34 (Date & Time) complete

                                // ***********************************************************
