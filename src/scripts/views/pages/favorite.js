import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
    createRestaurantItemTemplate,
    createLoader,
    createEmpty,
} from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
            <hero-favorite-bar></hero-favorite-bar>
            <main id="mainContent">
                <div class="latest">
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
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        loaderContainer.innerHTML = restaurants.length === 0 ? createEmpty() : '';
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Favorite;