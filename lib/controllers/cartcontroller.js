const { Router } = require('express');
const Cart = require('../models/cart');

module.exports = Router()
  .post('/', (req, res, next) => {
    Cart
      .insert(req.body)
      .then(cart => res.send(cart))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Cart
      .find()
      .then(carts => res.send(carts))
      .catch(next);
  });
