import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  beforeEach(() => {
    addLikeButtonContainer();
  });
  it('harus menampilkan button unfavorite pada restaurant yang belum disukai', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector(
        '#likeButtonContainer'
      ),
      resto: {
        id: 1,
      },
    });

    expect(
      document.querySelector(
        '[aria-label="add this resto to favorite"]'
      )
    ).toBeTruthy();
  });

  it('harus tidak menampilkan button unfavorite pada restaurant yang belum disukai', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector(
        '#likeButtonContainer'
      ),
      resto: {
        id: 1,
      },
    });
    expect(
      document.querySelector('[aria-label="unfavorite this resto"]')
    ).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector(
        '#likeButtonContainer'
      ),
      resto: {
        id: 1,
      },
    });

    document
      .querySelector('#likeButton')
      .dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const resto = await FavoriteRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);
  });

  xit('should not add a movie when it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector(
        '#likeButtonContainer'
      ),
      resto: {},
    });

    document
      .querySelector('#likeButton')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
