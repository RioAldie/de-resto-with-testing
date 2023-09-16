import API_ENDPOINT from '../global/api-endpoint.js';

class RestaurantsSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);

    const responseJson = await response.json();

    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantsSource;
