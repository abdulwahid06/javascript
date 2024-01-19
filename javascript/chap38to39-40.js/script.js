                                // ********************************************************


                                // Chapter 38 (Local vs. Global Variables)


                                // ********************************************************



// 1. Write a JavaScript function that demonstrates the usage of a local variable.
                                


var a ="A B C D E F G H I J K L M N O P .....";
function call(){
    console.log(a)

}
call()


// 2. How can you access a global variable inside a function in JavaScript?


var  var1 ="Hello";
function calling(){
    console.log(var1)
    var2="World"
}

calling()
console.log(var1,var2)



    





                                // ********************************************************


                                // Chapter 38 (Local vs. Global Variables) complete


                                // ********************************************************
                                












                                // ********************************************************


                                //          Chapter 39, 40 (Switch Statements)


                                // ********************************************************
                                





// 1. Write a JavaScript switch statement that checks the value of a/ variable and performs different actions based on different cases.

var day=new Date().getDay();
switch(day){
    case 0:
        console.log("Sunday")
        break;
    case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday!");
		break;
	default:
		console.log("Error");

}


// 2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.


var cityName=prompt("Enter the CityName")
switch(cityName.toLowerCase()){
    case "karachi":
        alert("the First condition get correct ")
        break;
    case "london":
        alert("the second condition get correct ")
        break;
    case "Canada":
        alert("the Third condition get correct ")
        break;
    case "U.k":
        alert("the fouth condition get correct ")
        break;
    case "Germany":
        alert("the fifth condition get correct ")
    break;
    default:
        alert("city not enter by user")
        
    

}



                                // ********************************************************


                                //          Chapter 39, 40 (Switch Statements) complete


                                // ********************************************************