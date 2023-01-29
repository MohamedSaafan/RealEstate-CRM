/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    alter table county drop column fips_long;
    alter table county drop column fips_short;
    alter table county add column fips_long INTEGER  PRIMARY KEY;
    alter table county add column fips_short INTEGER
    `);
};

exports.down = (pgm) => {
  pgm.sql(`
    alter table county drop column fips_long;
    alter table county drop column fips_short;
    alter table county add column fips_short INTEGER  PRIMARY KEY;
    alter table county add column fips_long INTEGER
    `);
};
