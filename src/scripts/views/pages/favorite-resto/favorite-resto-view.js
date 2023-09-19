import { createRestaurantItem } from '../../templates/template-creator';

class FavoriteRestoView {
  getTemplate() {
    return `
      
    <section id="favorite-container">
    <h4 id="favorite-header">Your Favorite Resto</h4>
    <div id="restaurants"></div>
    </section>
      
    `;
  }

  showFavoriteResto(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, resto) => carry.concat(createRestaurantItem(resto)),
        ''
      );
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  _getEmptyRestoTemplate() {
    return `
      <div class="resto-item__not__found">
        Tidak ada resto untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteRestoView;
