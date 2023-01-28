/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TYPE email_status_enum  AS ENUM ( 'Verified', 'Wrong Email', 'No Answer', 'DNC', 'Dead');
    CREATE TABLE email(
        email_id SERIAL PRIMARY KEY,
        email VARCHAR, 
        email_status email_status_enum, 
        created_on timestamp DEFAULT now() NOT NULL,
        updated_on timestamp DEFAULT now() NOT NULL
    );
    
    
    CREATE TRIGGER
        sync_lastmod
    BEFORE UPDATE ON
        email
    FOR EACH ROW EXECUTE PROCEDURE
    sync_lastmod();
    `);
};

exports.down = (pgm) => {};
