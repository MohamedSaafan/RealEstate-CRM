/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE county(
        fips_short INTEGER PRIMARY KEY,
        fips_long INTEGER, 
        county VARCHAR,
        county_id INTEGER,
        created_on timestamp DEFAULT now() NOT NULL,
        updated_on timestamp DEFAULT now() NOT NULL
    );
    
    
    CREATE TRIGGER
        sync_lastmod
    BEFORE UPDATE ON
        county
    FOR EACH ROW EXECUTE PROCEDURE
    sync_lastmod();
    `);
};

exports.down = (pgm) => {};
