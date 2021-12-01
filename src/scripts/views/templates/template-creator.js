import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="list_item">
    <img src="${API_ENDPOINT.IMG.S}${restaurant.pictureId}" alt="${restaurant.name}" />
    <h3>${restaurant.name}</h3>    
    <p>${restaurant.address}</p>    
    <p>${restaurant.city}</p>    
    <p>${restaurant.description}</p>    
    <h4>FOODS</h4>
    <ul>
        <li>${restaurant.menus.foods.map((food) => food.name).join(', ')}</li>
    </ul>
    <h4>DRINKS</h4>
    <ul>
        <li>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</li>
    </ul>
    <h4>CUSTOMER REVIEWS</h4>
    <ul class="restaurantInfo">
        ${restaurant.customerReviews.map((review) => `
            <li class="restaurantInfoList">
                <p>Nama Reviewer: ${review.name}</p>
                <p>Tanggal Review: ${review.date}</p>
                <p>Review: ${review.review}</p>
            </li>
        `).join('')}
    </ul>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="list_item">
        <img class="list_item_thumb" src="${API_ENDPOINT.IMG.S}${restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="city">City : ${restaurant.city}</div>
        <div class="list_item_content">
            <p class="list_item_rating">
                Rating :
                <span href="#" class="list_item_rating_value">${restaurant.rating}</span>
            </p>
            <h3 class="list_item_title">
                <a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
            </h3>
            <p class="list_item_desc">${restaurant.description.slice(0, 175)}...</p>
        </div>
    </div>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
};