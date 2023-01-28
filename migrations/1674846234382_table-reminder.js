/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE reminder (
        reminder_id SERIAL PRIMARY KEY, 
        reminder_date DATE,
        reminder_note VARCHAR,
        reminder_assigned_to INTEGER,
        created_on timestamp DEFAULT now() NOT NULL,
        updated_on timestamp DEFAULT now() NOT NULL
    );
    
    
    CREATE TRIGGER
        sync_lastmod
    BEFORE UPDATE ON
        reminder
    FOR EACH ROW EXECUTE PROCEDURE
    sync_lastmod();
    
    `);
};

exports.down = (pgm) => {};
