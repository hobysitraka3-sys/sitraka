const boutons = document.querySelectorAll(".voir");

boutons.forEach(function(btn){

btn.addEventListener("click",function(){

let bio = this.nextElementSibling;

if(bio.style.display==="block"){

bio.style.display="none";
this.innerHTML="Voir la biographie";

}else{

bio.style.display="block";
this.innerHTML="Masquer la biographie";

}

});

});