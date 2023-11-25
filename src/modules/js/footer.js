let footer = document.querySelector("footer");

export function loadFooter() {

    footer.innerHTML = /* html */ `
<div id="footer-container">
<h2 id="copyright-footer">Jimi Hendrix © 2023</h2>
<div id="rrss-container">
    <a href="https://www.facebook.com/?locale=es_ES" target="blank"><img src="/images/logos/facebook-gold-icon.png" alt="facebook"></a>
    <a href="https://twitter.com/?lang=es" target="blank"><img src="/images/logos/twitter-gold-icon.png" alt="twitter"></a>
    <a href="https://www.instagram.com/" target="blank"><img src="/images/logos/insta-gold-icon.png" alt="instagram"></a>
</div>
</div>
`;
}