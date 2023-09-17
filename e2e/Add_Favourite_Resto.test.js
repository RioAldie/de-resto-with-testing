const assert = require('assert');

Feature('Favorite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('menampilkan kosong pada halaman favorite', ({ I }) => {
  I.see(
    'Tidak ada resto untuk ditampilkan',
    '.resto-item__not__found'
  );
});
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
Scenario(
  'manambahkan lebih dari satu restaurant ke favorite',
  async ({ I }) => {
    I.see(
      'Tidak ada resto untuk ditampilkan',
      '.resto-item__not__found'
    );

    I.amOnPage('/');

    I.seeElement('.resto__title');

    // menambahkan resto ke favorite
    const items = [];

    for (let i = 1; i <= 3; i++) {
      I.click(locate('.resto__title').at(i));
      I.seeElement('#likeButton');
      I.click('#likeButton');
      // eslint-disable-next-line no-await-in-loop
      items.push(i);
      I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');

    // mengecek kita sudah dihalaman favorite
    I.seeElement('#favorite-header');

    const visibleLikedResto = await I.grabNumberOfVisibleElements(
      '.resto__item'
    );

    // mengecek jumlah data yang telah ditambahkan
    assert.strictEqual(items.length, visibleLikedResto);
  }
);
