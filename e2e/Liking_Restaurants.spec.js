const assert = require('assert');

Feature('Liking Restaurants');

Before(({
    I,
}) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({
    I,
}) => {
    I.see('Oops... it looks like your Favorite Restaurants List is empty', '#empty-favorite-state');
});

Scenario('liked one restaurant', async ({
    I,
}) => {
    I.see('Oops... it looks like your Favorite Restaurants List is empty', '#empty-favorite-state');

    I.amOnPage('/');

    I.seeElement('.list_item_content h3.list_item_title a');

    const firstRestaurant = locate('.list_item_content h3.list_item_title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.list_item_content h3.list_item_title a');
    const likedRestaurantTitle = await I.grabTextFrom('.list_item_title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('liked a restaurant then disliked that restaurant', ({
    I,
}) => {
    I.see('Oops... it looks like your Favorite Restaurants List is empty', '#empty-favorite-state');

    I.amOnPage('/');

    I.seeElement('.list_item_content h3.list_item_title a');
    I.click(locate('.list_item_content h3.list_item_title a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    I.seeElement('.list_item_content h3.list_item_title a');
    I.click('.list_item_content h3.list_item_title a');

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('Oops... it looks like your Favorite Restaurants List is empty', '#empty-favorite-state');
});