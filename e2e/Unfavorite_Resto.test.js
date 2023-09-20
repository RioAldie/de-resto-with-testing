const assert = require('assert');

Feature('Remove favorite Resto');

Scenario('menambahkan satu resto kedalam favorite', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.resto__title');

  const firstResto = locate('.resto__title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  // mengecek kita sudah dihalaman favorite
  I.seeElement('#favorite-header');
  I.seeElement('.resto__item');

  // memastikan restaurant yang ditambahkan sama
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('manghapus satu resto dari favorite', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.resto__title');

  // masuk ke halaman detail
  const firstResto = locate('.resto__title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  // menambahkan resto ke favorite
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  // mengecek kita sudah dihalaman favorite
  I.seeElement('#favorite-header');

  // mengecek bahwa favorite tidak kosong
  I.seeElement('.resto__item');

  // masuk ke halaman detail
  I.click(firstResto);
  I.seeElement('#likeButton');
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  // melakukan unfavourite
  I.click('#likeButton');

  // mengecek judul resto yang diunfofavorite harus sama
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  // kembali ke halaman favorite
  I.amOnPage('/#/favorite');

  // mengecek kita sudah dihalaman favorite
  I.seeElement('#favorite-header');
});
