import RestaurantSource from '../../data/restaurant-source';
import {
    createRestaurantItemTemplate,
    createLoader,
    createMessageFailed,
} from '../templates/template-creator';

const Home = {
    async render() {
        return `
            <hero-bar></hero-bar>
            <main id="mainContent">
                <div class="latest">
                    <h2 class="content-title">Explore Restaurants</h2>
                    <div id="loader-container"></div>
                    <div class="list" id="list-content"></div>
                </div>
            </main>
        `;
    },

    async afterRender() {
        const restaurantsContainer = document.getElementById('list-content');
        const loaderContainer = document.getElementById('loader-container');
        loaderContainer.innerHTML = createLoader();
        const restaurants = await RestaurantSource.listRestaurant();
        loaderContainer.innerHTML = restaurants.length == 0 ? createMessageFailed() : '';
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;