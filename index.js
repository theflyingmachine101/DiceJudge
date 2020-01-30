var n1 = Math.random();
n1 = Math.floor(n1 * 6) + 1;
var n2 = Math.random();
n2 = Math.floor(n2 * 6) + 1;
var i1 = "images/dice" + n1 + ".png";
var i2 = "images/dice" + n2 + ".png";
document.addEventListener("keypress", function() {
  document.querySelectorAll("img")[0].setAttribute("src", i1);
  document.querySelectorAll("img")[1].setAttribute("src", i2);
  if (n1 == n2) {
    document.querySelector("h1").textContent = "It's a Draw!!";
  } else if (n1 > n2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!!";
  } else {
    document.querySelector("h1").textContent = "Player 2 Wins!!🚩";
  }

});
