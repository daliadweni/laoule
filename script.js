https://www.larousse.fr/dictionnaires/francais/femme/33217
function get(){
    var word = document.getElementById("word").value;
fetch('https://www.larousse.fr/dictionnaires/francais/'+word)
.then(response => response.text())
.then(html => {
 if   (html.indexOf('<p class="CatgramDefinition">') > 0){
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");
        var element = doc.getElementsByClassName("CatgramDefinition")[0].innerText // or:
       if(element=="nom féminin"){
        document.getElementById("resultat").innerHTML="";
        document.getElementById("resultat").innerHTML+="<strong style='color: #007BFF'>La </strong>"+  doc.getElementsByClassName("AdresseDefinition")[0].innerText.substring(1,doc.getElementsByClassName("AdresseDefinition")[0].innerText.length) ;
       }
       else{       
         document.getElementById("resultat").innerHTML="";
        document.getElementById("resultat").innerHTML+="<strong style='color: #007BFF'>Le </strong>"+  doc.getElementsByClassName("AdresseDefinition")[0].innerText.substring(1,doc.getElementsByClassName("AdresseDefinition")[0].innerText.length) ;

       }
    }else{
        document.getElementById("resultat").innerHTML="";
        document.getElementById("resultat").innerHTML+="<span style='color: red'>désolé, aucun résultat n'a été trouvé</span>";
    }
    
});
    }