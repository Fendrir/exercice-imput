console.log("salut toi");

// ----------------------------------------- Ecrire le resultat dans une div -------------------------------------------


// $("#valider").click (function() {
//   	var prenom = $("#first_name").val();
//   	var nom = $("#last_name").val();
//   	var age = $("#age").val();


//   	$("#texte-de-merde").html(prenom + " " + nom + " " + age + " ans");

//  });


// ----------------------------- autre façon de façon de faire pour les variables : mettre en array ---------------

// $("#valider").click (function() {
// 	var objet ={
//   	 prenom : $("#first_name").val(),
//   	 nom : $("#last_name").val(),
//   	 age : $("#age").val(),
//   	 }
//  $("#texte-de-merde").html(objet.prenom + " " + objet.nom + " " + objet.age + " ans");

//  });



 // ------------------------------------ Ecrire le resultat dans un tableau -----------------------------------------

// id = tableau

$("#valider").click (function() {
  	var prenom = "<td>" + $("#first_name").val() + "</td>";
  	var nom = "<td>" + $("#last_name").val() + "</td>";
  	var age = "<td>" + $("#age").val() + "</td>";


  	$("#tableau").append("<tr>" + prenom + " " + nom + " " + age + "</tr>");

 });


// ------------------------------ CORRECTION -----------------------------------------

// var prenom = "",
//    nom = "",
//    age = 0;var tableRows = "<tr><th>Prenom</th><th>Nom</th><th>Age</th></tr>";$("button").click(function() {
//  prenom = $("#prenom").val();
//  nom = $("#nom").val();
//  age = $("#age").val();
 
//  tableRows += "<tr><td>" + prenom +
//                "</td><td>" + nom +
//                "</td><td>" + age +
//                "</td></tr>";
 
 
//  $("#container").html("<table>" + tableRows + "</table>");
// });