var Ball = document.getElementById('Ball')
var Hoop = document.getElementById('Hoop')
var myScore;
function startGame() {
  Ball.gravity = 0.05;
}
function shoot2(n) {
  Ball.gravity = n;
}