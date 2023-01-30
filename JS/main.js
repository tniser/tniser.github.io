window.onscroll = function () {
  scrollFunction();
};

document.getElementById("menu-btn").addEventListener("click", showMenu);

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("navbar").style.opacity = "0.5";
  } else {
    document.getElementById("navbar").style.opacity = "1";
  }
}

function showMenu() {
  let menu = document.getElementById("menu");
  let btn = document.getElementById("menu-icon");
  let btnMenu = document.getElementById("menu-btn");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    btnMenu.style.setProperty("--btn-rotate", "0");
    btn.style.setProperty("--trans-after", "translate(0px, 13px)");
    btn.style.setProperty("--trans-before", "translate(0px, -13px)");
    btn.style.backgroundColor = "#FFF";
  } else {
    menu.style.display = "flex";
    btnMenu.style.setProperty("--btn-rotate", "360deg");
    btn.style.setProperty("--trans-before", "rotate(-45deg)");
    btn.style.setProperty("--trans-after", "rotate(45deg)");
    btn.style.backgroundColor = "transparent";
  }
}
