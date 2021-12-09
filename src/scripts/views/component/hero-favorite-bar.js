class HeroFavoriteBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero hero-favorite">
                <div class="hero-inner">
                    <h1 class="hero-title">Favorite</h1>
                    <h2 class="hero-subtitle">Your Favorite Restaurants</h2>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-favorite-bar', HeroFavoriteBar);