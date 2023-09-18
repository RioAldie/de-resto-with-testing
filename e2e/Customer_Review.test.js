const assert = require('assert');

Scenario('menambahkan review baru', async ({ I }) => {
  // masuk ke halaman utama
  I.amOnPage('/');

  I.seeElement('.resto__title');

  const firstResto = locate('.resto__title').first();

  // masuk ke halaman detail
  I.click(firstResto);

  // mengecek apakah sudah masuk ke halaman detail
  I.seeElement('#likeButton');

  // mengecek form review
  I.seeElement('#input-name');
  I.seeElement('#input-body');
  I.seeElement('#form-review-button');

  // menginputkan value ke dalam input
  const nameValue = 'Chamber';
  I.fillField('#input-name', nameValue);
  I.fillField('#input-body', 'You Want To Play? let`s Play!');
  I.click('#form-review-button');

  // reload halaman detail agar review baru bisa tampil
  I.refreshPage();

  // memastikan bahwa review baru telah tampil
  const newReview = locate('#review__name').withText(nameValue);
  const newReviewName = await I.grabTextFrom(newReview);

  assert.strictEqual(newReviewName, nameValue);
});
