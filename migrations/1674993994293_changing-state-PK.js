/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    alter table state drop column state_fips;
    alter table state drop column state_short;
    alter table state add column state_short VARCHAR PRIMARY KEY;
    alter table state add column state_fips integer
    `);
};

exports.down = (pgm) => {
  pgm.sql(`
    alter table state drop column state_fips;
    alter table state drop column state_short;
    alter table state add column state_short VARCHAR ;
    alter table state add column state_fips integer PRIMARY KEY
    `);
};
