function isOddOrEven(input){
    if(input!=0){
        if(input%2===0){
            console.log(`Even`);
        }
        else if(input%2!=0){
            console.log(`Odd`);
        }
    }
    else{
        console.log("Enter a valid input:");
        
    }
}

isOddOrEven(2048);
isOddOrEven(47);
isOddOrEven(0);