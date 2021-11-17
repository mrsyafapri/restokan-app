import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import {
    restaurants
} from '../DATA.json';

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const listContents = document.getElementById('list-content');
const date = new Date();
const year = date.getFullYear();
const footerYear = document.getElementById('footer-year');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});

restaurants.forEach((restaurant) => {
    listContents.innerHTML += `
        <div class="list_item">
            <img class="list_item_thumb" src="${restaurant.pictureId}" alt="${restaurant.name}" />
            <div class="city">City : ${restaurant.city}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating :
                    <span href="#" class="list_item_rating_value">${restaurant.rating}</span>
                </p>
                <h3 class="list_item_title">
                    <a href="#">${restaurant.name}</a>
                </h3>
                <p class="list_item_desc">${restaurant.description.slice(0, 175)}...</p>
            </div>
        </div>
        `;
});

footerYear.innerHTML = year;