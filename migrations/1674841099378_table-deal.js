/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TYPE deal_temp_enum  AS ENUM ('Cold','Warm','Hot');
    CREATE TABLE deal(
        deal_id SERIAL PRIMARY KEY, 
        deal_temp deal_temp_enum,
        deal_offer_amount varchar,
        deal_offer_agreed_amount varchar,
        deal_offer_type varchar,
        deal_offer_status varchar,
        deal_offer_date TIMESTAMP,
        deal_offer_note varchar,
        created_on timestamp DEFAULT now() NOT NULL,
        updated_on timestamp DEFAULT now() NOT NULL
    );


    CREATE TRIGGER
    sync_lastmod
  BEFORE UPDATE ON
    deal
  FOR EACH ROW EXECUTE PROCEDURE
    sync_lastmod();
    `);
};

exports.down = (pgm) => {
  pgm.sql(`DROP TABLE deal;`);
};
