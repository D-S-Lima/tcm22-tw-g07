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


function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "titulos.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Name</th><th>Ano</th></tr>";
  var x = xmlDoc.getElementsByTagName("List");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("ANO")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("titulos").innerHTML = table;
}