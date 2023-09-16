import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import AddReviewInitiator from '../../utils/add-review-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createDetailRestaurant,
  createLoadingTemplate,
  createMenuItemTemplate,
  createReviewTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="detail-restaurant"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createLoadingTemplate();
    const result = await RestaurantsSource.detailRestaurant(url.id);
    const { restaurant } = result;
    const { menus, customerReviews } = restaurant;
    const { foods, drinks } = menus;

    restoContainer.innerHTML = createDetailRestaurant(restaurant);
    const foodContainer = document.querySelector('#box-food');
    const drinkContainer = document.querySelector('#box-drink');
    const reviewContainer = document.querySelector('#review');

    foods.forEach((food) => {
      foodContainer.innerHTML += createMenuItemTemplate(food);
    });
    drinks.forEach((drink) => {
      drinkContainer.innerHTML += createMenuItemTemplate(drink);
    });
    customerReviews.forEach((review) => {
      reviewContainer.innerHTML += createReviewTemplate(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector(
        '#likeButtonContainer'
      ),
      resto: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });

    // get data review from input

    const formReviewButton = document.querySelector(
      '#form-review-button'
    );

    AddReviewInitiator.init({
      formReviewButton,

      id: restaurant.id,
    });
  },
};

export default Detail;
