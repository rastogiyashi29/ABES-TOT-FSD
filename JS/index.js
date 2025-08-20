//var a=12;
//console.log("hi="+a);
//var a=20;
//console.log(typeof(a));
//var a=12;
//var a=30;
//console.log(a);
// let a=12;
// if(a>10){
//     let a=30;
//     console.log("a="+a);
// }
// console.log(a);
//simple function

// function sum(a,b){
//     return a+b;
// }
// let val=sum(12,20);
// console.log("sum="+val);


//function expression
// const data=function(){
//     console.log("Hi,how are you");
// }
// data();


//Arrow function
// const data=()=>{
//     return "Hi,how are u";
// }
// console.log(data());

// const sum=(a,b)=>{
//     return a+b;
// }
// const add=(a,b)=>a+b;
// add(12,40);

//IIFE
// (()=>{
//     console.log("Hello")
// })();

// (function(){
//     console.log("Welcome");
// })();

// function greet(msg="Hello"){
//     console.log("Hi"+msg);
// }
// console.log(greet("Welcome to ABES"));

function selectLanguage(lang){
    let data;
    if(lang=="Java"){
        function javaCompiler(){
            console.log( "JAVA Compiler selected and code is being executed");
        }
        data=javaCompiler();
    }
    else if(lang=="C"){
        function cCompiler(){
            console.log("C Compiler is being selected and code is executed");
        }
        data=cCompiler();
    }
    else{
        console.log("Selected language compiler is not found");
    }
    return data;
}
selectLanguage();