import axios from 'axios';
import CONFIG from '../global/config';

const AddReviewInitiator = {
  async init({ formReviewButton, id }) {
    this._formReviewButton = formReviewButton;
    this._id = id;

    this._formReviewButton.addEventListener('click', async () => {
      await this._getValueInput(this._id);
    });
  },

  async _getValueInput(id) {
    const userName = document.querySelector('#input-name').value;
    const userReview = document.querySelector('#input-body').value;
    const newReview = {
      id,
      name: userName,
      review: userReview,
    };

    await this._postReview(newReview);
  },

  async _postReview(newReview) {
    try {
      const res = await axios({
        method: 'post',
        url: `${CONFIG.BASE_URL}/review`,
        data: newReview,
      });

      if (res.status < 300) {
        console.log('Post Review Success', res);
        alert('Added new Review Success');
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default AddReviewInitiator;
