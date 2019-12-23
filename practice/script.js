function addition(){
    var val , value;

    val = parseInt(document.querySelector("#num1").value);
    value = parseInt(document.querySelector("#num2").value);

    var total = val + value;

    console.log(total);
    document.querySelector('h2').innerHTML = total ;
    document.querySelector('h2').style.border = "3px solid #000000";
    document.querySelector('h2').style.width = "50%";
    document.querySelector('h2').style.margin = "0 auto";
    document.querySelector('h2').style.textAlign = "center"

}

function substract(){
    var val , value;

    val = parseInt(document.querySelector("#num1").value);
    value = parseInt(document.querySelector("#num2").value);

    var total = val - value;

    console.log(total);
    document.querySelector('h2').innerHTML = total ;
    document.querySelector('h2').style.border = "3px solid #000000";
    document.querySelector('h2').style.width = "50%";
    document.querySelector('h2').style.margin = "0 auto";
    document.querySelector('h2').style.textAlign = "center"

}

function multiply(){
    var val , value;

    val = parseInt(document.querySelector("#num1").value);
    value = parseInt(document.querySelector("#num2").value);

    var total = val * value;

    console.log(total);
    document.querySelector('h2').innerHTML = total ;
    document.querySelector('h2').style.border = "3px solid #000000";
    document.querySelector('h2').style.width = "50%";
    document.querySelector('h2').style.margin = "0 auto";
    document.querySelector('h2').style.textAlign = "center"

}

function division(){
    var val , value;

    val = parseInt(document.querySelector("#num1").value);
    value = parseInt(document.querySelector("#num2").value);

    var total = val / value;

    console.log(total);
    document.querySelector('h2').innerHTML = total ;
    document.querySelector('h2').style.border = "3px solid #000000";
    document.querySelector('h2').style.width = "50%";
    document.querySelector('h2').style.margin = "0 auto";
    document.querySelector('h2').style.textAlign = "center"
}

function search(){
    var lang = document.querySelector('svalue').value;
    function books(lang);
}

function books(language){

var xhttp = new XMLHttpRequest(); 
var fulldata;

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        fulldata = JSON.parse(this.responseText);
        for (var i=0; i<fulldata.length; i++){
            if(fulldata[i].language = lang)
            console.log(fulldata[i]);
        }
    }
}

xhttp.open("GET", "https://raw.githubusercontent.com/attainu-falcon/falcon-course-module/master/coding-challenges/data/books.json", true);
xhttp.send();

}
