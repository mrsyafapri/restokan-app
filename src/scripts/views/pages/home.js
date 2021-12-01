import RestaurantSource from '../../data/restaurant-source';
import {
    createRestaurantItemTemplate,
} from '../templates/template-creator';

const Home = {
    async render() {
        return `
            <div class="latest">
                <h2 class="content-title">Explore Restaurants</h2>
                <div class="list" id="list-content"></div>
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantSource.listRestaurant();
        const restaurantsContainer = document.getElementById('list-content');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;