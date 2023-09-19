import RestaurantsSource from '../../data/restaurants-source.js';
import {
  createDataNotFoundTemplate,
  createLoadingTemplate,
  createRestaurantItem,
} from '../templates/template-creator.js';

const Home = {
  async render() {
    return `<header id="hero">
    <div id="thumbnail">
    <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg">
      <img
        src="./images/hero-image_1-large.jpg"
        alt="thumbnail image"
        id="thumbnail-img"
        width="100%"
        />
        </picture>
    </div>
    <div class="hero-detail">
      <h1>De Resto.</h1>
      <h2>Find best Restaurants Where Ever You Are</h2>
    </div>
  </header>
  <section id="container"></section>`;
  },

  async afterRender() {
    const container = document.querySelector('#container');
    container.innerHTML = createLoadingTemplate();
    const response =
      await RestaurantsSource.listRestaurants().finally(() => {
        container.innerHTML = '';
      });
    if (response.error) {
      container.innerHTML = createDataNotFoundTemplate();
    }

    const { restaurants } = response;
    restaurants.forEach((resto) => {
      container.innerHTML += createRestaurantItem(resto);
    });
  },
};

export default Home;
