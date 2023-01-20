let loadingBar = document.getElementById("loading-bar");
  var loading = 0;
  var loadingSpeed = 0.4;
  
  function move() {
    loading += loadingSpeed;
    if (loading > 50) {
      loadingSpeed *= 0.99;
    } 
    loadingBar.style.width = loading + "%";
    // End at 99.5% filled.
    if (loading < 99.5) {
      setTimeout(move, 10);
    }
  }
  move();