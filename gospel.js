var loader = document.querySelector(".loader");
 window.addEventListener("load", vanish);
 function vanish(){
      loader.classList.add("disappear");
 }
 
 
             function openNav(){
                 document.getElementById("mysidenav").style.width="250px";
            }
            
                        function closeNav(){
                 document.getElementById("mysidenav").style.width="0";
            } 
            
            var typed = new Typed('.textline', {
                 strings:['Marweb gospel','where  you can learn to pray','and devote your time to God.'],
                 typeSpeed: 100,
                 backSpeed: 60,
                 backDelay: 1000,
                 loop:true
            })