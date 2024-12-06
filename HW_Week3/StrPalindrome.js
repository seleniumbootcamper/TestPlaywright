let input = `Madam`;

function checkPalindrome(testStr){
    let inter = testStr.split("");
    let output=``;
    for(i=inter.length-1;i>=0;i--){
        output = output+inter[i];
    }
    if(input.toLowerCase()===output){
        console.log(`The input string is ${input}`);
        console.log(`The output string is ${output}`);
        console.log(`Palindrome String !`);
    }
    else{
        console.log(`Not palindrome !`);
        
    }
}

checkPalindrome(input.toLowerCase());