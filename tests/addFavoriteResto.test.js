import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helper/testFactories';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  beforeEach(() => {
    addLikeButtonContainer();
  });
  it('harus menampilkan button unfavorite pada restaurant yang belum disukai', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    expect(
      document.querySelector(
        '[aria-label="add this resto to favorite"]'
      )
    ).toBeTruthy();
  });

  it('harus tidak menampilkan button unfavorite pada restaurant yang belum disukai', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });
    expect(
      document.querySelector('[aria-label="unfavorite this resto"]')
    ).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    document
      .querySelector('#likeButton')
      .dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const resto = await FavoriteRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a movie when it has no id', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({});

    document
      .querySelector('#likeButton')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
