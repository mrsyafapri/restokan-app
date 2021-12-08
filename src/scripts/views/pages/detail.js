import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
    createRestaurantDetailTemplate,
    createHeroDetail,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
    async render() {
        return `
            <div id="hero_detail"></div>
            <main id="mainContent">
                <section class="container">
                    <div id="restaurant" class="detail"></div>
                    <div id="likeButtonContainer"></div>
                </section>
            </main>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
        const hero = document.getElementById('hero_detail');
        hero.innerHTML = createHeroDetail(restaurant);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: restaurant.id,
                pictureId: restaurant.pictureId,
                name: restaurant.name,
                description: restaurant.description,
                rating: restaurant.rating,
                city: restaurant.city,
            },
        });
    },
};

export default Detail;