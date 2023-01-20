let loadingBar = document.getElementById("myBar");
var loading = 0;
var loadingSpeed = 0.4;

function updateLoading() {
  loading += loadingSpeed;
  if (loading > 50) {
    loadingSpeed *= 0.99;
  }
  loadingBar.style.width = loading + "%";
  // End at 99.5% filled.
  if (loading < 99.5) {
    setTimeout(updateLoading, 10);
  }
}
updateLoading();