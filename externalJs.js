document.write("Hello Students from External file<br>");

document.write("Variables in JS");
    // Var= variable can be accessed globally
    // let= variable can be accessed in the block scope( in a function itself)

    var a=6;
    document.write("<br> Value of a is: " + a + "<br>");

    var b=9.8;
    document.write("Value of b is: " + b + "<br>");

    var c='Hello world';
    document.write("Value of c is: " + c + "<br>");

    var d=true;
    document.write("Value of d is: " + d + "<br>");

    //Check if number is prime or not
    var i=5; //write complete code logic here

   // Alert box
   alert("Please enter the user id");

   //Prompt box
   var R=prompt("Enter your name:");

   //Confirm box
   var k=confirm("Do you want to proceed?");

   if(k==true){
    document.write("You clicked OK <br>");
   }
   else{
    document.write("You clicked cancelled <br>");
   }

   // prompt takes input in string form, convert the input using parseInt, parseFloat, etc.
   var inp=parseInt(prompt("Please enter a number:"));
   document.write("<br> The number entered is: "+ inp + "<br>");


