import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helper/testFactories';

describe('Unliking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unlike widget when the movie has been liked', async () => {
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
    ).toBeTruthy();
  });

  it('should not display like widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    expect(
      document.querySelector(
        '[aria-label="add this resto to favorite"]'
      )
    ).toBeFalsy();
  });

  it('should be able to remove liked movie from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });
    document
      .querySelector('[aria-label="unfavorite this resto"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked movie is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });
    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestoIdb.deleteResto(1);
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unfavorite this resto"]')
      .dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
