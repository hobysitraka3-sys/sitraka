let bouton = document.getElementById("btn");

bouton.addEventListener("click",function(){

window.scrollTo({

top:600,

behavior:"smooth"

});

});

let achats=document.querySelectorAll(".acheter");

let message=document.getElementById("message");

achats.forEach(function(btn){

btn.addEventListener("click",function(){

let produit=this.parentElement.querySelector("h3").innerText;

message.innerHTML="✅ Vous avez ajouté <strong>"+produit+"</strong> au panier.";

});

});