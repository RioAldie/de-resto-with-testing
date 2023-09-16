import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithMovie = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector(
      '#likeButtonContainer'
    ),
    resto,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithMovie };
