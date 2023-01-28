/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE file(
        file_id SERIAL PRIMARY KEY,
        property_id INTEGER,
        file_location VARCHAR,
        created_on timestamp DEFAULT now() NOT NULL,
        updated_on timestamp DEFAULT now() NOT NULL
    );
    
    
    CREATE TRIGGER
        sync_lastmod
    BEFORE UPDATE ON
        file
    FOR EACH ROW EXECUTE PROCEDURE
    sync_lastmod();
  
    `);
};

exports.down = (pgm) => {};
