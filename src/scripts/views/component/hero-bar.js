class HeroBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero hero-home">
                <div class="hero-inner">
                    <h1 class="hero-title">RestoKan Apps</h1>
                    <h2 class="hero-subtitle">Find the best Restaurants in one Web App</h2>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-bar', HeroBar);