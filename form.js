
/*
var pg_int = document.querySelector('.nm');
var sc_int = document.querySelector('.sc');
var nm_info = document.querySelector('.name');
var sec_info = document.querySelector('.security');
 
 sc_int.addEventListener('click', pg_hide);
 pg_int.addEventListener('click', sc_hide);
 
 function pg_hide(){
      nm_info.style.display="none";
      sec_info.style.display="block";
 }
function sc_hide(){
      nm_info.style.display="block";
      sec_info.style.display="none";
 }*/









function btn1(){
     document.querySelector('.security').style.display="block";
      document.querySelector('.name').style.display="none";
     
}
function btn2(){
     document.querySelector('.verify').style.display="block";
      document.querySelector('.security').style.display="none";
     
}

function btn3(){
     document.querySelector('.verify').style.display="none";
      document.querySelector('.picture').style.display="block";
     
}
function learn(){
     document.querySelector('.learn').style.display="none";
      document.querySelector('#more').style.display="block";
     
}

/*var state = false;

function show() {
     if (state) {
          document.getElementById('pass').setAttribute("type", "password");
          state = false;
     }
     else{
           document.getElementById('pass').setAttribute("type", "text");
          state = true;
     }
}*/
 
 
 
 
 
 var p_c1 = document.querySelector('#pic1');
var p_c2 = document.querySelector('.pic2');
var p_c3 = document.querySelector('.pic3');
var p_c4 = document.querySelector('.pic4');
 
 p_c1.addEventListener('click', c_1);
 p_c2.addEventListener('click', c_2);
 p_c3.addEventListener('click', c_3);
 p_c4.addEventListener('click', c_4);
 
 function c_1(){
      p_c1.style.border="6px solid blue";
      p_c2.style.border="none";
      p_c3.style.border="none";
      p_c4.style.border="none";
      
 }
function c_2(){
      p_c1.style.border="none";
      p_c2.style.border="6px solid red";
      p_c3.style.border="none";
      p_c4.style.border="none";
      alert('These image is not correct, click on the right one');
 }
 function c_3(){
      p_c1.style.border="none";
      p_c2.style.border="none";
      p_c3.style.border="6px solid red";
      p_c4.style.border="none";
      alert('These image is not correct, click on the right one');
 }
 function c_4(){
      p_c1.style.border="none";
      p_c2.style.border="none";
      p_c3.style.border="none";
      p_c4.style.border="6px solid red";
      alert('These image is not correct, click on the right one');
      return true;
 }