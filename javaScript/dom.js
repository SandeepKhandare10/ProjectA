document.getElementById("one").innerHTML="Hello World";
document.getElementById("one").style.color="red";

document.getElementsByTagName("h2")[0].innerHTML="hiii";

let x=document.createElement("h5");
console.log(x)
document.removeChild("h5");
function CliclMe(){
    document.getElementById("one").innerHTML=""
}
function changeColor(){
    document.getElementById("firstwraper").style.backgroundColor="blue";
    document.getElementById("firstwraper").style.color="red";
    document.getElementById("newId").innerHTML="hi how are you";

}

function changeColorAgain(){
    document.getElementById("firstwraper").style.backgroundColor="red";
    document.getElementById("firstwraper").style.color="blue";
    document.getElementById("newId").innerHTML="i am fine";
}