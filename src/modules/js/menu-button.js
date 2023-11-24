let menuButton = document.getElementById("menu-button");
let navMobile = document.getElementById("nav-mobile");
let clicked = false

export function showMobileMenu() {
  menuButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (clicked == false) {
      navMobile.style.display = "flex";
      navMobile.style.marginLeft = "0px";
      clicked = true;
    } else {
      navMobile.style.display = "none";
      navMobile.style.marginLeft = "100%";
      clicked = false;
    }
  });
}
