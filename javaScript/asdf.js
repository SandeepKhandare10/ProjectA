class Hello{
    constructor(name,rollnumber){
        this.name=name;
        this.rollnumber=rollnumber;
    }
    display(){
        console.log(this.name,this.rollnumber);
        
    }
}

class Child extends Hello{
    constructor(name,rollnumber,age){
        super(name,rollnumber);
        this.age=age;
    }
    display(){
        console.log(this.name,this.rollnumber,this.age);
        
    }
}


const obj=new Child("Sandeep",10,21);

obj.display();

var object={
    name:"Sandeep",
    rollnumber:10,
    arr:[1,2,3,4,5,6]
}
const data=JSON.stringify(object)
console.log(data);

var json=`{
    "name":"Sandeep",
    "rollnumber":10,
    "arr":[1,2,3,4,5,6],
    "obj1":{
        "name":"Sandeep",
        "rollnumber":10
    }
}`
const data2=JSON.parse(json)
console.log(data2);

