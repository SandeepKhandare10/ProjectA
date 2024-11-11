// function Sum(...num){
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum=sum+num[i];
//     }
//     return sum;
// }
// console.log(Sum(10,12))


// const [one,two,...data]=[1,2,3,4,5,6,82,89,55,6,55,4]
// console.log(one);
// console.log(two);
// console.log(data[3]);

// const{ firstName,lastName,...objData}={
//     firstName:"sandeep",
//     lastName:"khandare",
//     age:"22",
//     gender:"male",
//     address:"pune"
// }
// console.log(firstName,lastName);
// console.log(objData);


// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const arr3=[...arr1,...arr2];

// console.log(arr3);


// const objData = {
//     firstName: "sandeep",
//     lastName: "khandare",
// }
// const data = {
//     age: "22",
//     gender: "male",
//     address: "pune"
// }
// const mergedData = { ...objData, ...data }
// console.log(mergedData);


// console.log(add(10,20));     error hoisting
// var add =(a,b)=>a+b;

function Incre(){
    let count =0;
    function innerInc(){
        return count++;
    }
    return innerInc;
}
const incre = Incre();
console.log(incre()); 
console.log(incre()); 
console.log(incre()); 
console.log(incre()); 