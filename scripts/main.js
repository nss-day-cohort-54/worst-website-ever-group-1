var noBtn = document.getElementsByClassName("btn-dontEatCookies")

var yesBtn = document.getElementsByClassName("btn-eatCookies")

yesBtn.onclick = function() {
    cookeBox.style.display ="none"
}

noBtn.onclick = function() {
    cookieBox.style.display = "block";
}
