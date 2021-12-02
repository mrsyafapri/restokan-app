class HeroBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero" style="background-image: linear-gradient(rgba(0, 0, 5, 0.5), rgba(0, 0, 5, 0.5)), url('images/heros/hero-home.jpg');">
                <div class="hero-inner">
                    <h1 class="hero-title">RestoKan Apps</h1>
                    <h2 class="hero-subtitle">Find the best Restaurants in one Web App</h2>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-bar', HeroBar);