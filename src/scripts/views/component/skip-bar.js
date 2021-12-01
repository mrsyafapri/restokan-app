class SkipBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<a href="#mainContent" class="skip-link">Skip To Content</a>`;
    }
}

customElements.define('skip-bar', SkipBar);