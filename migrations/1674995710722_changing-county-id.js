/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    alter table county drop column county_id;
    alter table county add column state_id VARCHAR
    `);
};
// i mistaked when i was creating the county table and created
// county_id column instead of state_id
exports.down = (pgm) => {
  pgm.sql(`
    alter table county drop column state_id;
    alter table county add column county_id integer
    `);
};
