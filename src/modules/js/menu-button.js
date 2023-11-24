export function showMobileMenu () {

    let menuButton = document.getElementById('menu-button');
    let navMobile = document.getElementById('nav-mobile');
    
    menuButton.addEventListener('click', (event) => {
        event.preventDefault();

        navMobile.style.display='flex'
        navMobile.style.marginLeft='0px'
    })
}