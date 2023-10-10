 var loader = document.querySelector(".loader");
 window.addEventListener("load", vanish);
 function vanish(){
      loader.classList.add("disappear");
 }
                        
       function bis(){
            document.querySelector('.bis').innerHTML="Not available now";
            
       } 
        
        

        function openNav(){
                 document.getElementById("mysidenav").style.width="320px";
            }
            
                        function closeNav(){
                 document.getElementById("mysidenav").style.width="0";
            }
            function bar(){
                 document.getElementById('setbar').style.display="block";
            }
            function barout(){
                        document.getElementById('setbar').style.display="none"; 
            }