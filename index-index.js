
var firstCodeColor = 255;
var secondCodeColor = 192;
var thirdCodeColor = 192;

setInterval(
    function () {

        if ( firstCodeColor == 255 && secondCodeColor == 192 && thirdCodeColor <= 255) {
            thirdCodeColor++;
        }
        if ( firstCodeColor >= 192 && secondCodeColor == 192 && thirdCodeColor == 255 ) {
            firstCodeColor--;
        }
        if ( firstCodeColor == 192 && secondCodeColor <= 255 && thirdCodeColor == 255 ) {
            secondCodeColor++;
        }
        if ( firstCodeColor == 192 && secondCodeColor == 255 && thirdCodeColor >= 192) {
            thirdCodeColor--;
        }
        if ( firstCodeColor <= 255 && secondCodeColor == 255 && thirdCodeColor == 192 ) {
            firstCodeColor++;
        }
        if ( firstCodeColor == 255 && secondCodeColor >= 192 && thirdCodeColor == 192 ) {
            secondCodeColor--;
        }
        
      var finalColor = "rgb(" + firstCodeColor + " ," + secondCodeColor + " ," + thirdCodeColor + ")"; 
      document.getElementsByTagName("nav")[0].style.backgroundColor = finalColor;
      document.getElementsByClassName("home-name-container")[0].style.backgroundColor = finalColor;
      document.getElementsByClassName("cv-button")[0].style.backgroundColor = finalColor;
      document.getElementsByClassName("cv-button")[1].style.backgroundColor = finalColor;
      document.getElementsByClassName("footer-section")[0].style.backgroundColor = finalColor;


    },50);


    var img = document.getElementsByClassName("logo")[0];
    
    img.addEventListener("mouseover", myFunction);

    function myFunction() {
        document.getElementsByClassName("me-img")[0].style.transform = "rotate(20deg)";
    }

    img.addEventListener("mouseout", myFunction2);

    function myFunction2() {
        document.getElementsByClassName("me-img")[0].style.transform = "rotate(0deg)";
    }

