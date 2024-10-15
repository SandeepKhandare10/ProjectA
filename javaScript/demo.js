alert("ok")
console.log("hello i am console")
document.write("I am document")
document.getElementById("one").innerHTML="Hello world";
{
    var x=58;
}
// var x=30;
x=56;
console.log(x);

{
    let s=47;
    console.log(s)
}
{
    const c=67;
    console.log(c);
}
document.body.textContent="Hello JavaScript";
g=39;
var g;
console.log(g);

v=37;
var v;

{ 
    console.log(v)
}
var nu1m=345;

console.log(typeof(nu1m));
var nu2=parseInt("7548fjhhf");
console.log(nu2);
var nu1=parseInt("4376.345")
console.log(nu1);


let salary=[43000,55000,65000,87000,990000];

let bonusSal = salary.map(function(ele){
    return ele + 10000;
});
console.log(bonusSal);
let arr1=[23,43,56,76,87,3,5,6,8];
let arr4=[1,2,3,4,5,6,7,8,]
var arr3=arr1.concat(arr2);
console.log(arr3)
var arr2=arr1.slice(1,4);
console.log(arr2)
console.log(arr1.sort(function(b,a){return a-b}));

arr1.sort();
console.log(arr1);

let newarr1=arr1.filter(function(ele){
    return ele%2==0;
})
console.log(newarr1);

var x="123";
var b=123;

    console.log(x==b);

console.log(x===b);

function add(a,b){
return a+b;
}
console.log(add(10,"12"));

//Array
let arr=[34,5,5,3,2,56,7];
arr.push(19);
arr.pop()
arr.shift()
arr.unshift(10)
console.log(arr);
var a ="sandeep";
console.log(a.split(''));


var str = "Hello World";
console.log(str.toUpperCase());
let s=[1,2,3,4,6,6];

console.log(s.indexOf(4));
console.log(s.lastIndexOf(6));
console.log(s.find(1));

console.log(s.join("-"));

num.splice(3,2,534,435);
console.log(num);