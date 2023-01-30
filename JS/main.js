window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("navbar").style.opacity = "0.5";
  } else {
    document.getElementById("navbar").style.opacity = "1";
  }
}
