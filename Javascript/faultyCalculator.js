/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/


function isTrue(){
    let randomNumber = Math.floor(Math.random()*10)
    return randomNumber==1
}

function add(a,b){
return isTrue() ?a+b:a-b
}
function minus(a,b){
    return isTrue()?a-b:a/b
}
function divide(a,b){
    return isTrue()?a/b:a**b
}
function multi(a,b){
    return isTrue()?a*b:a+b
}


function faultyCalculator(num1,num2,cb){
    return cb(num1,num2)
}
console.log(faultyCalculator(2,5,add))