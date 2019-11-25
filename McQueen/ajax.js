var xhttp = new XMLHttpRequest(); 
var data;

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       data = xhttp.responseText;
       var output = document.querySelector('.content');
       output.innerHTML = data.ability + " " + data.name; 
    }
};

xhttp.open("GET", "https://pokeapi.co/api/v2/", true);
xhttp.send();

var con = document.querySelector('.content');
con.style.color = "white";