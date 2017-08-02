console.log("salut toi");

// first_name
// last_name
// age
// valider-button

$("#valider").click (function() {
  	var prenom = $("#first_name").val();
  	var nom = $("#last_name").val();
  	var age = $("#age").val();


  	$("#texte-de-merde").html(prenom + " " + nom + " " + age);

 });


// autre façon de façon de faire pour les variables : mettre en tableaux


	// var objet ={
 //  	 prenom : $("#first_name").val(),
 //  	 nom : $("#last_name").val(),
 //  	 age : $("#age").val(),
 //  	 }
 // $("#texte-de-merde").html(objet.prenom + objet.nom + objet.age);