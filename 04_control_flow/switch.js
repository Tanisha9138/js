const month = 3
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");  // if we don't write break then it will print march april  and so on except default case.
        // break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("default case match");
        break;
}

// if we have to match string than
// const month = "march"
// switch(month){
//     case "jan":
//         console.log("January");
//         break;