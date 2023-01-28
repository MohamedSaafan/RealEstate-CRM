/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TYPE phone_status  AS ENUM ( 'Verified', 'Wrong Number', 'No Answer', 'DNC', 'Dead');
  CREATE TABLE phone (
   
      phone_id SERIAL PRIMARY KEY,
      phone VARCHAR, 
      phone_status phone_status,
      created_on timestamp DEFAULT now() NOT NULL,
      updated_on timestamp DEFAULT now() NOT NULL
  );
  
  
  CREATE TRIGGER
      sync_lastmod
  BEFORE UPDATE ON
      phone
  FOR EACH ROW EXECUTE PROCEDURE
  sync_lastmod();`);
};

exports.down = (pgm) => {
  pgm.sql("DROP TABLE phone");
};
