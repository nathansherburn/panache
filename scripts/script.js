$(document).ready(function () {
  var imageNum = Math.floor(Math.random()*3)+1;
  var background2IsOnTop =  true;

  var background1 = document.getElementById('background1');
  var background2 = document.getElementById('background2');

  background2.style.backgroundImage = 'url(images/im' + (imageNum).toString() + 'fade.jpg)';
  background1.style.backgroundImage = 'url(images/im' + (imageNum+1).toString() + 'fade.jpg)';

  setInterval(getNextImage,3000);

  function getNextImage() {
    if (background2IsOnTop) {
      console.log('background2IsOnTop')
      background1.style.backgroundImage = 'url(images/im' + (imageNum).toString() + 'fade.jpg)';
      $("#background1").animate({ opacity: 1 }, 1500);
      $("#background2").animate({ opacity: 0 }, 1500);
      background2IsOnTop = false;
    } else {
      console.log('background2Is NOT OnTop')
      background2.style.backgroundImage = 'url(images/im' + (imageNum).toString() + 'fade.jpg)';
      $("#background1").animate({ opacity: 0 }, 1500);
      $("#background2").animate({ opacity: 1 }, 1500);
      background2IsOnTop = true;
    }
    var newImageNum = Math.floor(Math.random()*3)+1;
    imageNum = (newImageNum == imageNum) ? (imageNum%4 + 1) : newImageNum;
  }


});