// var obj={
//     firstname: "Sandeep",
//     lastname : "Khandare",
//     rollno : 10,
//     college : "MIT",
//     fullname :function(){
//         console.log(this);
//         console.log(this.firstname,this.lastname)
//     }
// }
// obj.fullname();

// function Display(name,age,rollno,id){
//     this.age;
//     this.rollno;
//     this.id;
//     this.name;
//     this.show=function(){
//         this.id++;
//         console.log(name,age,id);
//     }
// }
// let obj = new Display("Sandeep",25,10,10);
// console.log(obj)
// obj.show();

// let obj2={
//     name:"Sandeep",
//     age:25,
//     gender:"Male",
//     subject:"Java",
//     obj:{
//         name2:"djf"
//     }
// }
// console.log(obj2.obj.name2)
// for(let x in obj2){
//     console.log(x,obj2[x]);
// }

// function Student(name, age, grade, subjects) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//     this.subjects = subjects;
// }

// const student1 = new Student("sandeep khanadre", 25, "Graduate", ["java", "javaScript", "SQL"]);
// console.log(student1);

// function withdrow(debitamount,balence){
//     this.debitamount=debitamount;
//     this.balence=balence;
//     this.withdrow=function(){
//         if(this.debitamount>this.balence){
//             console.log("Insufficient balance");
//         } else {
//             this.balence -= this.debitamount;
//             console.log("Withdrawal successful. Remaining balance: " + this.balence);
//         }

//         const obj = new withdrow(200, 500);
//         obj.withdrow();

// function Withdraw(debitAmount, balance) {
//     this.debitAmount = debitAmount;
//     this.balance = balance;

//     this.withdraw = function() {
//         if (this.debitAmount > this.balance) {
//             console.log("Insufficient balance");
//         } else {
//             this.balance -= this.debitAmount;
//             console.log("Withdrawal successful. Remaining balance: " + this.balance);
//         }
//     };
// }

// const transaction = new Withdraw(200, 500);
// transaction.withdraw();

// function STUD(name , age,grade,sub){
//     this.name=name;
//     this.age=age;
//     this.sub=sub;

// }
// let std1 = new std1("sandeep",25,graduate,java);
// console.log(std1)

// console.log(obj["firstname"]);
// console.log(obj.firstname);

// var obj1={}
// obj1.firstname="Sandeep";
// obj1.lastname="Khandare";
// obj1.rollno=10;
// console.log(obj1)

// var obj2 =new Object();
// obj2.firstname="Sandeep";
// obj2.lastname="Khandare";

// console.log(obj2);


obj2 = {
    name: "Sandeep",
    age: 25,
    rollno: 34,
    college: "MIT",
    salary: 100203,
  };
  let obj = {
    color: "red",
    __proto__: obj2,
  };
  console.log(obj.college);
  