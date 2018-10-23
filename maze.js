window.onload = main;

function main(){

  let leftwall = document.getElementById("boundary1");
  leftwall.addEventListener("mouseover", function(){
     this.setAttribute("class", "boundary youlose");
   });

  let wallboundries = document.querySelectorAll(".boundary");
  let flagdis = -1;

  for (var p = 0; p < wallboundries.length; p++ ){
    if (wallboundries[p].className.indexOf("example") != -1){
      flagdis = p;
    }else{
      wallboundries[p].addEventListener("mouseover", function(){
        document.getElementById("status").textContent = "You Lose!"
        for(var a = 0; a < wallboundries.length; a++ ){
          if( a != flagdis){
            wallboundries[a].className = "boundary youlose";
   				   }
          }
       });
     }
  }




}
