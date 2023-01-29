/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(
    `alter table contact rename contact_address to contact_street_address`
  );
};

exports.down = (pgm) => {
  pgm.sql(
    `alter table contact rename contact_street_address to contact_address`
  );
};
