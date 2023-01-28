/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TYPE tag_type_enum  AS ENUM ('property', 'contact',' phone or email');
  CREATE TABLE tag(
      tag_id SERIAL PRIMARY KEY,
      tag VARCHAR,
      tag_type tag_type_enum,
      created_on timestamp DEFAULT now() NOT NULL,
      updated_on timestamp DEFAULT now() NOT NULL
    );


  CREATE TRIGGER
      sync_lastmod
  BEFORE UPDATE ON
      tag
  FOR EACH ROW EXECUTE PROCEDURE
  sync_lastmod();
`);
};

exports.down = (pgm) => {
  pgm.sql("DROP TABLE tag");
};
