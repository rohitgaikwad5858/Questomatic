/*
let adults=(12);
let children=(2);

if(adults <0){
    adults =0;
}
if(children <0){
    children =0;
}

let price=(adults * 12 + children *6);
console.log(price );


let i;
for (let i=1; i<= adults ;i++){
    console.log("Ticket #"+ i);
}

function cal(adults ,children){
    console.log("Price of ticket is "+((adults * 12 )+ (children *6) ));
}
;
cal(4,3);
*/

window.onload = function() {
    let btn = document.getElementById("buyBtn");
    btn.onclick = function() {
      let adults = document.getElementById("adults").value;
      let children = document.getElementById("children").value;
      let price =(adults *12 + children*6);
      alert(  "You have to pay Rs " + price);
    }
  }