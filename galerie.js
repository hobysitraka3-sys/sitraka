const boutons = document.querySelectorAll(".btn");
const cartes = document.querySelectorAll(".card");

boutons.forEach((btn)=>{

btn.addEventListener("click",()=>{

document.querySelector(".btn.active").classList.remove("active");

btn.classList.add("active");

let filtre = btn.dataset.filter;

cartes.forEach((carte)=>{

if(filtre==="all"){

carte.style.display="block";

}

else if(carte.classList.contains(filtre)){

carte.style.display="block";

}

else{

carte.style.display="none";

}

});

});

});