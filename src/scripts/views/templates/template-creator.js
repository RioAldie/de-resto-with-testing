import CONFIG from '../../global/config';

const createRestaurantItem = (
  resto
) => `<a href="/#/detail/${resto.id}">
<article class="card resto__item">
  <img
    src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"
    alt="${resto.name} photo"
    width="300px" height="200px" />
  <div class="card-detail">
    <h6 class="resto-rate">Rating : ${resto.rating} ★</h6>
    <h5 class="resto-city">${resto.city}</h5>
    <h4 class="resto__title">${resto.name}</h4>
  </div>
</article>
</a>`;

const createDetailRestaurant = (resto) => `
<img
    src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"
    alt="${resto.name} photo"
     />
  <div class="info-detail">
    <h4 class="resto__title" value="${resto.id}">${resto.name}</h4> 
    <h5 >Rating : ${resto.rating} <span> ★ </span></h5>
    <h5 >City: ${resto.city}</h5>
    <h5>Address: ${resto.address} </h5>
    <p> ${resto.description}</p>
  </div>
  <div id="menu">
    <h4>Food Menu</h4>
    <div id="box-food"></div>
    <h4>Drink Menu</h4>
    <div id="box-drink"></div>
  </div>
  <div id="review-container">
    <h4>Customer Review</h4>
    <div id="review"></div>
    <div id="form-review">
    <h4> Add Review </h4>
      <label for="name">Name :</label>
        <input id="input-name">
        <label for="body"> Your Review:</label>
        <textarea id="input-body" cols="20" rows="10"></textarea>
          <button type="submit" id="form-review-button">Save</button>
    </div>
  </div>
  `;

const createMenuItemTemplate = (item) => `<div class="menu-item">
  ${item.name}
</div>`;

const createReviewTemplate = (review) => `<div>
  <h5 id="review__name">${review.name}</h5>
  <h6>${review.date}</h6>
  <p>"${review.review}"</p>
</div>`;

const createLikeButtonTemplate = () => `
  <button aria-label="add this resto to favorite" id="likeButton" class="like">
  <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unfavorite this resto" id="likeButton" class="like">
  <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`;

const createLoadingTemplate = () =>
  `<div class="loading">
    Loading...
  </div>`;

const createDataNotFoundTemplate = () =>
  `<div class="not-found">
    Data Tidak Ditemukan
  </div>`;
export {
  createRestaurantItem,
  createDetailRestaurant,
  createMenuItemTemplate,
  createReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLoadingTemplate,
  createDataNotFoundTemplate,
};
