import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
    <img src="${API_ENDPOINT.IMG.L}${restaurant.pictureId}" alt="${restaurant.name}" class="detail__image" />
    <div class="detail__text">
        <ul class="detail__category">
            ${restaurant.categories.map((category) => `
                <li>${category.name}</li>
            `).join('')}
        </ul>
        <p class="detail__description">${restaurant.description}</p>
        <div class="detail__menus">
            <ul>
                <li>Food's</li>
                <ul>
                    ${restaurant.menus.foods.map((food) => `
                        <li>${food.name}</li>
                    `).join('')}
                </ul>
            </ul>
            <ul>
                <li>Drink's</li>
                <ul>
                    ${restaurant.menus.drinks.map((drink) => `
                        <li>${drink.name}</li>
                    `).join('')}
                </ul>
            </ul>
        </div>
        <div class="detail__reviews">
            <h2>Customer Reviews :</h2>
            <ul>
            ${restaurant.customerReviews.map((review) => (`
                <li>
                    <div>
                        <span class="avatar">${review.name[0]}</span>
                    </div>
                    <div>
                        <h3>${review.name}</h3>
                        <p>${review.review}</p>
                        <time>${review.date}</time>
                    </div>
                </li>`)).join(' ')}
            </ul>
        </div>
    </div>    
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="list_item">
        <img class="list_item_thumb" src="${API_ENDPOINT.IMG.M}${restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="city">City : ${restaurant.city}</div>
        <div class="list_item_content">
            <p class="list_item_rating">
                Rating : <span href="#" class="list_item_rating_value">${restaurant.rating}</span>
            </p>
            <h3 class="list_item_title">
                <a href="${`/#/detail/${restaurant.id}`}" aria-label="${restaurant.name}">${restaurant.name}</a>
            </h3>
            <p class="list_item_desc">${restaurant.description}</p>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createUnLikeButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

const createHeroDetail = (restaurant) => `
    <div class="hero" style="background-image: linear-gradient(rgba(0, 0, 5, 0.5), rgba(0, 0, 5, 0.5)), url('${API_ENDPOINT.IMG.L}${restaurant.pictureId}');">
        <div class="hero-inner hero-detail">
            <h1 class="hero-title">${restaurant.name}</h1>
            <h2 class="hero-subtitle">${restaurant.address}, ${restaurant.city}</h2>
            <p class="hero-subtitle">
                <i class="fas fa-star star" aria-hidden="true"></i> ${restaurant.rating}
            </p>  
        </div>
    </div>
`;

const createLoader = () => `
    <div class="indicator">
        <div class="spinner">
            <div class="spinner-item"></div>
            <div class="spinner-item"></div>
            <div class="spinner-item"></div>
            <div class="spinner-item"></div>
            <div class="spinner-item"></div>
        </div>
    </div>
`;

const createEmpty = () => `
    <div class="indicator">
        <p class="message" id="empty-favorite-state">Oops... it looks like your Favorite Restaurants List is empty<p>
    </div>
`;

const createMessageFailed = () => `
    <div class="indicator">
        <p class="message">Oops... it looks like your connections is down<p>
    </div>
`;

export {
    createRestaurantDetailTemplate,
    createRestaurantItemTemplate,
    createLikeButtonTemplate,
    createUnLikeButtonTemplate,
    createHeroDetail,
    createLoader,
    createEmpty,
    createMessageFailed,
};