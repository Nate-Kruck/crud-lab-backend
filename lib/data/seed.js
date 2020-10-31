const Cart = require('../models/cart');

const chance = require('chance').Chance();

module.exports = async({ cartCount = 5 } = {}) => {
  const cartToCreate = [...Array(cartCount)]
    .map(() => ({
      fgroup: chance.word(),
      ftype: chance.syllable(),
      qty: chance.integer({ min: 0, max: 5 })
    }));

  await Promise.all(cartToCreate
    .map(cart => Cart.insert(cart)));
};
