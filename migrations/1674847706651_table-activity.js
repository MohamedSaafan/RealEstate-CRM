/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE activity(
        activity_id SERIAL PRIMARY KEY,
        activity VARCHAR,
        staff_id INTEGER, 
        created_on timestamp DEFAULT now() NOT NULL,
        updated_on timestamp DEFAULT now() NOT NULL
    );
    
    
    CREATE TRIGGER
        sync_lastmod
    BEFORE UPDATE ON
        activity
    FOR EACH ROW EXECUTE PROCEDURE
    sync_lastmod();
  
    `);
};

exports.down = (pgm) => {};
