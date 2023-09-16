import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItem } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section id="favorite-container">
      <h4>Your Favorite Resto</h4>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restaurantsContainer = document.querySelector(
      '#favorite-container'
    );

    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestaurantItem(resto);
    });
  },
};

export default Like;
