function checkNumberType(input){
    if(input === 0){
        console.log(`The number is ${input}. Neither Postive nor Negative !`);
    }
    else if (input > 0) {
        console.log(`The number ${input} is Postive !`);
    }
    else if (input < 0) {
        console.log(`The number ${input} is Negative !`);
    }
     else {
        console.log(`Invalid input:  ${input} !`);
    }
}
//Positive check
checkNumberType(6);
//Negative check
checkNumberType(-1);
//Zero check
checkNumberType(0);
//Alphabets check
checkNumberType(`a`);