export function showMobileMenu() {

  let menuButton = document.querySelector('.menu-button');
  let navMobile = document.querySelector('.nav-mobile');

  menuButton.addEventListener("click", (event) => {
    event.preventDefault();

    navMobile.classList.toggle('nav-active')
    menuButton.classList.toggle('button-active')

  });
}
