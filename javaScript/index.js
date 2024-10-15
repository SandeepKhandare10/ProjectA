
// #myMarquee {
//     // border: 1px solid black;
// // }


let marquee = document.getElementById('myMarquee');
marquee.style.border = "1px solid black";
marquee.style.height = '50px';
marquee.style.width = '1500px';
marquee.direction = 'right'; // You can set 'left', 'right', 'up', or 'down'

// const input = prompt();
// const num = parseInt(input);

var num=38964;
var revNum = num.toString().split('').reverse().join('');

console.log(revNum)

