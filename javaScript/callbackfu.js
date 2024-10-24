console.log("A");

// setTimeout(()=>{
//     setInterval(()=>{
//         setTimeout(()=>{
//             console.log("DDDD");
//         },1000)
//         console.log("CCCC");
//     },3000)
//     console.log("B");
// },20000);


// setTimeout(()=>{
//     console.log("B")
// },2000);

// setInterval(()=>{
//     console.log("D")
// },3000);
// let promise = new Promise((resolve, reject) => {
//     let data = 99;
//     if (data > 100) {
//         resolve("Data is greater than 100")
//     } else {
//         reject("Data is less than or equal to 100")
//     }
// })
// promise.then((data)=>console.log(data)).catch((err)=>console.error(err));


fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err)=>console.log(err))