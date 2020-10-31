const pool = require('../utils/pool');

module.exports = class Cart {
  id;
  fgroup;
  ftype;
  qty;

  constructor(row) {
    this.id = row.id;
    this.fgroup = row.fgroup;
    this.ftype = row.ftype;
    this.qty = row.qty;
  }
  
  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM carts'
    );

    return rows.map(row => new Cart(row));
  }
  
  static async insert(cart) {
    const { rows } = await pool.query(
      'INSERT into carts (fgroup, ftype, qty) VALUES ($1, $2, $3) RETURNING *',
      [cart.fgroup, cart.ftype, cart.qty]
    );

    return new Cart(rows[0]);
  }

};
