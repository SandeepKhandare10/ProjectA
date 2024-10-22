var list = document.querySelector("#movie-list ul");

list.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    var li = e.target.parentElement;
    list.removeChild(li);
  }
});

var hide = document.getElementById("hide");
hide.addEventListener("click", function (e) {
  if (hide.checked == true) {
    list.hidden = true;
  } else if (hide.checked == false) {
    list.hidden = false;
  }
});

var form =document.forms['add-movie'];
form.addEventListener('submit',function(e){
    e.preventDefault();
    var val1 = form.querySelector('input[type="text"]').value;
    var li = document.createElement('li');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');

    li.appendChild(span1);
    li.appendChild(span2);
    list.appendChild(li);

    span1.textContent=val1;
    span2.textContent='delete';

    span1.classList.add('name');
    span2.classList.add('delete');

});

var searchMovie=document.querySelector('input[type="text"]');

searchMovie.addEventListener('keyup',function(e){
    var fltr=e.target.value.toUpperCase();
    var list= document.querySelector('#movie-list ul');
    var fullli = list.querySelectorAll('li');
    var li = list.querySelectorAll('li .name');
     for(i=0;i<li.length;i++){
        var a=li[i].textContent;
        var txtvalue = a.toUpperCase();
         if(txtvalue.indexOf(fltr) > -1){
            fullli[i].style.display = "";
        }else{
            fullli[i].style.display = "none";
        }
    }
})