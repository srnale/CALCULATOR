display=document.querySelector(".display");

function appendtoDisplay(input){
display.value+=input;

}
function c(){
    display.value="";
}
function calculate(){
   try{ display.value=eval(display.value);
}
catch(error){
    display.value="ERROR"
}}
