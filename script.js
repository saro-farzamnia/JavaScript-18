// Javasript is a single-threaded language 

// console.log("start");

// for (let index = 0; index < 1000; index++) {
//     console.log(index); 
// };
// console.log("End");


    //Async & Sync

// Callback & Async 
// step 1
// const number=5;
// setTimeout(()=>{
//     const result=number*2;
//     console.log(result);
// },2000);
// console.log("Hi");

// step 2
// function dublicate(number){
//     setTimeout(()=>{
//             const result=number*2;
//             console.log(result);
//         },2000);
// };
// dublicate(5);

// const add=(number)=>{
//     console.log(number+1);
// };
// add(2);

// step 3
// function dublicate(number,callback){
//         setTimeout(()=>{
//             const result=number*2;
//             console.log("1",result);
//             callback(result)
//         },2000);
//     };
// const add=(number)=>{
//     console.log("2",number+5);
// };
// dublicate(5,add);

    //callback hell
// function dublicate(number,callback1,callback2){
//     setTimeout(()=>{
//         const result=number*2;
//         console.log("1:",result);
//         callback1(result , callback2);
//     },2000);
// };
// const add=(number,callback)=>{
//     const result=number+5;
//     console.log("2:",result);
//     callback(result)
// };
// const numberToString=(number)=>{
//     console.log("3:",`${number}`);
// }
// dublicate(5,add,numberToString);

    //Promise
//Sync
// setTimeout(()=>{
//     console.log("1");
// },1000);
// console.log("2");

// //Async
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("1");
//         resolve();
//     },1000);
// });
// promise.then(()=>{console.log("2");});