class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <p>Copyright &copy; RestoKan Apps &middot; Created and designed by <a
                    href="http://mrsyafapri.github.io" target="_blank" rel="noopener noreferrer">Muhammad Rizki Syafapri</a>
            </p>
        `;
    }
}

customElements.define('footer-bar', FooterBar);