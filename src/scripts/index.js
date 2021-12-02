import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/component/skip-bar';
import './views/component/nav-bar';
import './views/component/hero-bar';
import './views/component/hero-favorite-bar';
import './views/component/footer-bar';
import App from './views/app';
import swRegister from './utils/sw-register';

const date = new Date();
const year = date.getFullYear();
const footerYear = document.getElementById('footer-year');

const app = new App({
    hamburger: document.querySelector('#hamburgerButton'),
    navLinks: document.querySelector('.nav-links'),
    links: document.querySelectorAll('.nav-links li'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});

footerYear.innerHTML = year;