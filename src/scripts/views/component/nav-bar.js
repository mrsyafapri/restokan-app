class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav id="navigationDrawer">
                <div class="logo">
                    <a href="#">RestoKan Apps</a>
                </div>
                <button id="hamburgerButton" class="hamburger" aria-label="navigation-menu">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </button>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="http://mrsyafapri.github.io" target="_blank" rel="noopener noreferrer">About Us</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);