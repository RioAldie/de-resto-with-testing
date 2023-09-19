import FavoriteRestoIdb from '../../data/favorite-resto-idb';

import FavoriteRestoShowPresenter from './favorite-resto/favorite-resto-presenter';
import FavoriteRestoView from './favorite-resto/favorite-resto-view';

const view = new FavoriteRestoView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestoShowPresenter({
      view,
      favoriteResto: FavoriteRestoIdb,
    });
  },
};

export default Like;
