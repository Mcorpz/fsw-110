var bsquare = 
document.getElementById("shape");
bsquare.addEventListener("mouseover",bluesquare)
document.getElementById("shape");
bsquare.addEventListener("mousedown", redsquare)
document.getElementById("shape");
bsquare.addEventListener("mouseup", yellowsquare)
document.getElementById("shape");
bsquare.addEventListener("dblclick", greensquare)
document.getElementById("shape");
addEventListener("wheel", orangesquare)
document.getElementById("shape");
bsquare.addEventListener("keypress", pinksquare)
function bluesquare() 
{
    bsquare.style.backgroundColor ="#0000FF"

  }


function redsquare() {
    
      
        bsquare.style.backgroundColor = "#FF0000"

}
function yellowsquare() {
    
      
        bsquare.style.backgroundColor = "#FFFF00"

}
function greensquare() {
    
      
        bsquare.style.backgroundColor = "#00FF00"

}
function orangesquare() {
    
      
        bsquare.style.backgroundColor = "#FFA500"

}
function pinksquare() {
    
      
        bsquare.style.backgroundColor = "#FFC0CB"

}
    
document.addEventListener("keydown", function(event) {
        if(event.which === 82){
                bsquare.style.backgroundColor = "#FF0000"
        }
        else {
        if(event.which === 66) {
                bsquare.style.backgroundColor ="#0000FF"
                }
                     
        else {
        if(event.which === 89) {
                bsquare.style.backgroundColor = "#FFFF00"
                }
           
        else {
        if(event.which === 71) {
                bsquare.style.backgroundColor = "#00FF00"
                }
             
        else {
        if(event.which === 79) {
                bsquare.style.backgroundColor = "#FFA500"
                }
             
        else {
        if(event.which === 80) {
                bsquare.style.backgroundColor = "#FFC0CB"
                }
        } 
}}}}} 
)    
