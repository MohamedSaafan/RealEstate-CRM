/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`CREATE TABLE staff (
    staff_id SERIAL PRIMARY KEY,
    staff_name varchar,
    created_on timestamp DEFAULT now() NOT NULL,
    updated_on timestamp DEFAULT now() NOT NULL
    );
    CREATE TRIGGER
    sync_lastmod
  BEFORE UPDATE ON
    staff
  FOR EACH ROW EXECUTE PROCEDURE
    sync_lastmod();
    `);
};

exports.down = (pgm) => {
  pgm.sql("DROP TABLE staff");
};
