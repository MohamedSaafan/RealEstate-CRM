/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`CREATE TABLE list(
  list_id SERIAL PRIMARY KEY,
  list VARCHAR,
  list_record_count INTEGER,
  created_on timestamp DEFAULT now() NOT NULL,
  updated_on timestamp DEFAULT now() NOT NULL
);


CREATE TRIGGER
  sync_lastmod
BEFORE UPDATE ON
  list
FOR EACH ROW EXECUTE PROCEDURE
sync_lastmod();`);
};

exports.down = (pgm) => {
  pgm.sql("DROP TABLE lists");
};
