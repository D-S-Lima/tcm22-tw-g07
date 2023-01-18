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

var i = 0;
var x;
titulo(i);

function titulo(i) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this, i);
        }
    };
    xmlhttp.open("GET", "cd_catalog.xml", true);
    xmlhttp.send();
}

function myFunction(xml, i) {
    var xmlDoc = xml.responseXML; 
    x = xmlDoc.getElementsByTagName("CD");
    document.getElementById("titulos").innerHTML =
    "Artist: " +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " + 
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

function next() {
if (i < x.length-1) {
  i++;
  titulo(i);
  }
}

function previous() {
if (i > 0) {
  i--;
  titulo(i);
  }
}