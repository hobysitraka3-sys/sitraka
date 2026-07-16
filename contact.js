const formulaire = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");

formulaire.addEventListener("submit", function(e){

e.preventDefault();

let nom = document.getElementById("nom").value;

confirmation.innerHTML =
"✅ Merci <strong>" + nom + "</strong>, votre message a été envoyé avec succès !";

formulaire.reset();

});