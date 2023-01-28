/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`CREATE TABLE owners (
    id SERIAL PRIMARY KEY ,
    company VARCHAR,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    address VARCHAR,
    city_id INTEGER,
    state_id INTEGER,
    zip_code varchar

)`);
};

exports.down = (pgm) => {
  pgm.sql("DROP TABLE owners");
};
