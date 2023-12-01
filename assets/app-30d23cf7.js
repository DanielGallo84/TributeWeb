(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function l(){let i=document.querySelector(".menu-button"),o=document.querySelector(".nav-mobile");i.addEventListener("click",a=>{a.preventDefault(),o.classList.toggle("nav-active"),i.classList.toggle("button-active")})}function r(){l()}let c=document.querySelector("footer");function g(){c.innerHTML=`
<div id="footer-container">
<h2 id="copyright-footer">Jimi Hendrix © 2023</h2>
<div id="rrss-container">
    <a href="https://www.facebook.com/?locale=es_ES" target="blank"><img src="/images/logos/facebook-gold-icon.png" alt="facebook"></a>
    <a href="https://twitter.com/?lang=es" target="blank"><img src="/images/logos/twitter-gold-icon.png" alt="twitter"></a>
    <a href="https://www.instagram.com/" target="blank"><img src="/images/logos/insta-gold-icon.png" alt="instagram"></a>
</div>
</div>
`}let m=document.querySelector("header");function d(){m.innerHTML=`
  <div id="header-container">
  <div class="links-container-desktop">
    <a href="/index.html">
      <button class="nav-links-desktop">Home</button>
    </a>
    <a href="/pages/albums/index.html">
      <button class="nav-links-desktop">Albums</button>
    </a>
    <a href="/pages/videos/index.html">
      <button class="nav-links-desktop">Videos</button>
    </a>
  </div>

  <div id="logo-container">
    <img id="logo-letters" src="/images/logos/logoletra.png" alt="logo letters">
    <img id="logo-egg" src="/images/logos/logo2.png" alt="logo eggs">
  </div>

  <div class="links-container-desktop">
    <a href="/pages/gallery/index.html">
      <button class="nav-links-desktop">Gallery</button>
    </a>
    <a href="#">
      <button class="nav-links-desktop">News</button>
    </a>
    <a href="#">
      <button class="nav-links-desktop">Contact Us</button>
    </a>
  </div>

  <button type="button" class="menu-button">
    <img id="menu-image" src="/images/logos/menu-gold.png" alt="menu image">
  </button>
</div>
<nav class="nav-mobile">
  <ul id="menu-links-container-mobile">
    <a href="/index.html">
      <li class="menu-links-mobile">Home</li>
    </a>
    <a href="/pages/albums/index.html">
      <li class="menu-links-mobile">Albums</li>
    </a>
    <a href="/pages/videos/index.html">
      <li class="menu-links-mobile">Videos</li>
    </a>
    <a href="">
      <li class="menu-links-mobile">Gallery</li>
    </a>
    <a href="">
      <li class="menu-links-mobile">News</li>
    </a>
    <a href="">
      <li class="menu-links-mobile">Contact Us</li>
    </a>
  </ul>

  <div id="social-container">
    <a href="https://www.facebook.com/" target="_blank"><img class="social-image"
        src="/images/logos/facebook-gold-icon.png" alt="facebook link"></a>
    <a href="https://www.twitter.com/" target="_blank"><img class="social-image"
        src="/images/logos/twitter-gold-icon.png" alt="twitter link"></a>
    <a href="https://www.instagram.com/" target="_blank"><img class="social-image"
        src="/images/logos/insta-gold-icon.png" alt="instagram link"></a>
  </div>
</nav>
    `}function u(){d(),g(),r()}u();
