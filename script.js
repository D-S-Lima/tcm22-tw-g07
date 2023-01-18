let mybutton = document.getElementById("Top");
window.onscroll = function () { Scroll() };
function Scroll() {
  let mybutton = document.getElementById("Top");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function GoTop() {
  let mybutton = document.getElementById("Top");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function playPause(video1) {
  var myVideo = document.getElementById("video1");
  if (myVideo.paused)
    myVideo.play()
  else
    myVideo.pause()
} 

function Text() {

  var btn = document.getElementById("Play");

  if (btn.value == "Play") {
      btn.value = "Pause";
      btn.innerHTML = "Pause";
  }
  else {
      btn.value = "Play";
      btn.innerHTML = "Play";
  }
}


var n = 0;
var x;
displayT(n);

function displayT(n) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            titulos(this, n);
        }
    };
    xmlhttp.open("GET", "titulos.xml", true);
    xmlhttp.send();
}

function titulos(xml, n) {
    var xmlDoc = xml.responseXML; 
    x = xmlDoc.getElementsByTagName("List");
    document.getElementById("titulos").innerHTML =
    "Number: " +
    x[n].getElementsByTagName("NUMBER")[0].childNodes[0].nodeValue +
    "<br>Name: " +
    x[n].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
    "<br>Ano: " + 
    x[n].getElementsByTagName("ANO")[0].childNodes[0].nodeValue;
}

function next() {
if (n < x.length-1) {
  n++;
  displayT(n);
  }
}

function previous() {
if (n > 0) {
  n--;
  displayT(n);
  }
}