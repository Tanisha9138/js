// for
// loop within loop
for(let i=0;i<=10;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=0;j<=10;j++){
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}

// multiplication within loop

for(let i =1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(i + '*' + j + '=' + i*j);
    }
}

// array declaration

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length)
for(let i=0;i<myArray.length;i++){
    const element = myArray[i];
    console.log(element);
}
// In JavaScript, accessing an array index that is out of bounds does not throw an error — it returns undefined.

let arr = [10,20,30];
console.log(arr[1]);
console.log(arr[5])   //undefined


// Some keywords =>
//    break & continue

for(let i =1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`)
        break;                            // Loop breaks at 5 further iterations does no execute.
    }
    console.log(`Value of i is ${i}`);
}

for(let i =1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`)
        continue;                           // only skip iterarion of 5 further iterations executed
    }
    console.log(`Value of i is ${i}`);
}