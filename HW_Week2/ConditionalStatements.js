function launchBrowser(browserName){
    if(browserName===`Chrome`){
        console.log(`Browser Name: ${browserName}`);
    }
    else{
        console.log('Enter a valid browser');
    }
}

function runTests(testType){
    switch (testType) {
        case `smoke`:
            console.log(`Smoke tests`);
            break;
        case `sanity`:
            console.log(`Sanity tests`);
            break;
        case `regression`:
            console.log(`Regression tests`);
            break;
        default:
            console.log(`Smoke tests`);
            break;
    }
}
//Positive test
launchBrowser('Chrome');
//Negative test
launchBrowser('Firefox');

runTests('smoke');
runTests('sanity');
runTests('regression');
//default block
runTests('!!!');