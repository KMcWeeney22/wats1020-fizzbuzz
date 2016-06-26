// Place your FizzBuzz code here
var fBCount = 100;
function fizzBuzzTest(){
// Running numbers 1 through 20 and checking to see if they are divisible by 3 or 5
for (var i = 1; i <= fBCount; i++){
  //check to see if number is divisble by both 3 and 5, if so then print FizzBuzz
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
  // check to see if number is divisible by 5, if so then print Buzz
    else if(i % 5 === 0){
        console.log("Buzz");
    }
  // Check to see if number is divisible by 3, if so print Fizz
    else if(i % 3 === 0){
        console.log("Fizz");
    }
  // if not divisible by 3 or 5, then print the number 
    else {
        console.log(i)
    }
}
}
fizzBuzzTest();