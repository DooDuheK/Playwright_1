// let browserName="Chrome"
// if(browserName=="Chrome"){
//     console.log("Chrome is to opened")
// }
// else{
//     console.log("Browser unspecified")
// }


function launchBrowser (browserName){
    if (browserName.toLowerCase() == "chrome"){
        console.log("chrome is to be opened")

    }
    else {
        console.log("launching "+ browserName +" Browser")
    }

}

launchBrowser("Chrome")
launchBrowser("Opera")


function runTest (testingName){
    switch(testingName.toUpperCase()){
        case "SANITY":
            console.log("sanity test is running")
            break;
        case "SMOKE":
            console.log("smoke test is runing") 
            break;
        case "REGRESSION":
            console.log("Regression test is running")
            break;
        default:
            console.log("testing type invalid, running sanity check by default") 
            break;      

    }
}
runTest("se")
runTest("sanity")