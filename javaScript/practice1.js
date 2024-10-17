// let sum=data.map((a,b)=>a+b );

// console.log((3,45));

// console.log(add(23,45));

// function loginmessege(username){
//     if(username == undefined){
//         console.log("enter username")
//         return
//     }
//     return `${username} just loged in`
// }
// console.log(loginmessege());


// const user={
//     username: "sandeep",
//     pass: "1010",

//     logdetails: function(){
//         console.log(`${this.username},welcome the website`);
//         console.log(this);
//     }
// }
// user.logdetails()
// user.logdetails(this);
// user.username="sk";
// user.pass=1234
// user.logdetails();

// function chai(){
//     console.log(this)
// }
// chai()
// let chai=(a,b) =>  {
//     return a+b
// }
// let chai=(a,b) =>  a+b
// let s=[1,3,4,5,7,7,3,5,4,4,7,7];
// let sum=0;
// let max=0;
//   for (let i=0;i<s.length;i++) {
//     sum+=s[i];
//     if(max<s[i]){
//         max=s[i];
//     }
// }
//     console.log(sum);
//     console.log(max);
    
  
// let sum = s.reduce((a, b) => a + b, 0)
// console.log(sum);


// let chai=(a,b) => ({result: a+b})
// console.log(chai(2,3));
// console.log();


let arr = [1,2,3,4,5,6,7,0,0];
for(let i = 0; i < arr.length/2-1; i++){
let n=arr.shift();
arr.push(n);
}
console.log(arr);

// arr.unshift(arr[2]);
// console.log(arr);
// let arr1=[];
// for (let i = 0; i < arr.length; i++) {
//   if (arr1.includes(arr[i])) {
//     arr1.push("_")}
//     else{
//     arr1.push(arr[i]);
//   }
// }
// console.log(arr1);