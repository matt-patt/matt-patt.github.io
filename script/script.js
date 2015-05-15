var deg = 0;
window.setInterval(function () {
      document.getElementById("main").style.transform="rotate(" + deg + "deg)" ;
      deg+=1;
    }, 50);
