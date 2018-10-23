window.onload = main;

function main(){
/** Question 1 ***/
  let leftwall = document.getElementById("boundary1");
  leftwall.addEventListener("mouseover", function(){
     this.setAttribute("class", "boundary youlose");
   });
/** Question 2 ***/
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
/** Question 3 ***/
/***let ending = document.getElementById("end");
ending.addEventListener("mouseover",function() {
  if(document.getElementsByClassName("boundary youlose").length == 0){
    alert("You Win!")
  }
});
***/
/** Question 4 ***/
let startIt = document.getElementById("start");
let statusIt = document.getElementById("status");

startIt.addEventListener("click", function(){
  let thisWall = document.querySelectorAll(".boundary");
  if (thisWall.length != 0){
    for(var a = 0; a < thisWall.length; a++){
      if(thisWall[a].className == "boundary example"){
        continue;
      }
      thisWall[a].className = "boundary";
    }

    statusIt.textContent = "Move your mouse over the \"S\" to begin.";
  }
});
/** Question 5 ***/
let theEnd = document.getElementById("end");
let theStatus = document.getElementById("status");

theEnd.addEventListener("mouseover", function(){
  if (document.querySelectorAll(".youlose").length == 0){
    theStatus.textContent = "You Win!";
  }else {
    theStatus.textContent = "You Lose!";
  }
});
/** Question 6 ***/


}
