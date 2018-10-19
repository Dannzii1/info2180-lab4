window.onload = main;

function main(){

  let leftwall = document.getElementById("boundary1");
   leftwall.addEventListener("mouseover", function(){
     this.setAttribute("class", "boundary youlose");
   });
}
