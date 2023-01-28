/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE state(
        state_fips SERIAL PRIMARY KEY,
        state_long VARCHAR,
        state_short VARCHAR, 
        created_on timestamp DEFAULT now() NOT NULL,
        updated_on timestamp DEFAULT now() NOT NULL
    );
    
    
    CREATE TRIGGER
        sync_lastmod
    BEFORE UPDATE ON
        state
    FOR EACH ROW EXECUTE PROCEDURE
    sync_lastmod();
    `);
};

exports.down = (pgm) => {};
