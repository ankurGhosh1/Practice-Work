var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       $('') = xhttp.responseText;
    }
};
xhttp.open("GET", "https://api.spotify.com", true);
xhttp.send();