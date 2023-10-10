            function openNav(){
                 document.getElementById("mysidenav").style.width="320px";
            }
            
                        function closeNav(){
                 document.getElementById("mysidenav").style.width="0";
            }
            
            
            
            
             var user = prompt("input your First and last name to complete the login process.");
             
             console.log(user);
             document.querySelector('.tell').innerHTML= user;
             document.querySelector('.name').innerHTML= user;
               document.querySelector('.po').innerHTML= user;
             if (user < 5) {
                  
               alert('failure to login please insert your first and last name')
               location.href='login.html';
               console.log('Failed to login')
             }
             else{
                  alert('you have successfully logged in');
                  console.log('successfull')
             }



function close(){
     document.getElementById('greetings').style.display = "none";
}
function opton(){
     document.querySelector('.see').style.display="block";
}
function gro(){
     document.getElementById('ber').style.borderBottom="none"; 
     document.querySelector('.member').style.display="none";  
     document.querySelector('.group').style.display="block"; 
     document.querySelector('.page1').style.width="100%"; 
}
function ber(){
     document.getElementById('ber').style.borderBottom="4px solid #360260"; 
     document.querySelector('.member').style.display="block"; 
     document.querySelector('.group').style.display="none"; 
     document.querySelector('.page1').style.width="100%"; 
}



function readFile(){
     var reader = new FileReader();
     var file = document.getElementById('demo').files[0];
     reader.onload = function(e){
          document.getElementById('result').src= e.target.result;
          document.querySelector('.pro').src= e.target.result;
     }
     reader.readAsDataURL(file);
}

let light_mode = document.querySelector('.light');
let dark_mode = document.querySelector('.dark');
light_mode.addEventListener('click', l_m);
dark_mode.addEventListener('click', d_m);
function l_m(){
     document.querySelector('.body').style.background="white";
     document.querySelector('.act').style.background="#0059FF";
     document.querySelector('.body').style.color="black";
     document.querySelector('.bo').style.color="black";
     document.querySelector('.settings').style.background="white";
     document.querySelector('.settings').style.color="black";
     document.querySelector('.light').style.color="black";
     document.querySelector('.dark').style.color="black";
     
}
function d_m(){
     document.querySelector('.body').style.background="hsla(222,47%,11%,1)";
     document.querySelector('.act').style.background="#0059FF";
     document.querySelector('.body').style.color="white";
     document.querySelector('.bo').style.color="white";
     document.querySelector('.settings').style.background="hsla(222,47%,11%,1)";
     document.querySelector('.settings').style.color="white";
     document.querySelector('.light').style.color="white";
     document.querySelector('.dark').style.color="white";
     
}
const e_t = document.getElementById('exit');
e_t.addEventListener('click', e_x);
function e_x(){
     document.querySelector('.settings').style.display="none";
     document.querySelector('.bo').style.display="block";
     document.querySelector('.member').style.display="block";
     document.querySelector('.book').style.display="block";
}
const s_t = document.getElementById('set');
s_t.addEventListener('click', s_e);
function s_e(){
     document.querySelector('.settings').style.display="block";
     document.querySelector('.bo').style.display="none";
     document.querySelector('.member').style.display="none";
     document.querySelector('.book').style.display="none";
}