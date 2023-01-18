let mybutton = document.getElementById("Top");
window.onscroll = function () { Scroll() };
function Scroll() {
  let mybutton = document.getElementById("Top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
