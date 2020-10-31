const fs = require('fs');
const pool = require('../utils/pool');
const seed = require('../data/seed');


beforeEach(() => {
  return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
});

beforeEach(() => {
  return seed();
});
