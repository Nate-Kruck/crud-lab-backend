require('../lib/data/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

const Cart = require('../lib/models/cart');

describe('Cart Routes', () => {
  it('gets cart via GET', async() => {
    const carts = await Cart.find();
    const response = await request(app)
      .get('/api/v1/cart');

    expect(response.body).toEqual(expect.arrayContaining(carts));
  });
});
