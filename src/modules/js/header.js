let header = document.querySelector('header')

export function loadHeader() {
  header.innerHTML = /* html */ `
    <div id="header-container">
        <div id="logo-container">
          <img id="logo-letters" src="/images/logos/logoletra.png" alt="logo letters">
          <img id="logo-egg" src="/images/logos/logo2.png" alt="logo eggs">
        </div>
        <button type="button" class="menu-button">
          <img id="menu-image" src="/images/logos/menu-gold.png" alt="menu image">
        </button>
      </div>

      <nav class="nav-mobile">
        <ul id="menu-links-container-mobile">
          <a href="/index.html"><li class="menu-links-mobile">Home</li></a>
          <a href="/pages/albums/index.html"><li class="menu-links-mobile">Albums</li></a>
          <a href="/pages/videos/index.html"><li class="menu-links-mobile">Videos</li></a>
          <a href=""><li class="menu-links-mobile">Gallery</li></a>
          <a href=""><li class="menu-links-mobile">News</li></a>
          <a href=""><li class="menu-links-mobile">Contact Us</li></a>
        </ul>

        <div id="social-container">
          <a href="https://www.facebook.com/" target="_blank"><img class="social-image" src="/images/logos/facebook-gold-icon.png" alt="facebook link"></a>
          <a href="https://www.twitter.com/" target="_blank"><img class="social-image" src="/images/logos/twitter-gold-icon.png" alt="twitter link"></a>
          <a href="https://www.instagram.com/" target="_blank"><img class="social-image" src="/images/logos/insta-gold-icon.png" alt="instagram link"></a>
        </div>
      </nav>
    `;
}