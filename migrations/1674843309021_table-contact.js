/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TYPE contact_type_enum  AS ENUM ('Person', 'Company', 'Trust');
  CREATE TYPE contact_relation_enum  AS ENUM ('Owner Lead', 'Owner Verified', 'Relative', 'Staff');
  CREATE TYPE contact_status_enum  AS ENUM ( 'Verified Owner', 'Verified Other', 'Wrong Person', 'No Contact', 'DNC', 'Dead');
  CREATE TABLE contact(
    contact_id SERIAL PRIMARY KEY,
    company VARCHAR, 
    first_name VARCHAR, 
    last_name VARCHAR, 
    contact_address VARCHAR, 
    contact_city VARCHAR, 
    contact_state_id  INTEGER, 
    contact_zip_code VARCHAR, 
    contact_zip_code_plus4  VARCHAR, 
    contact_county_id  INTEGER,
    contact_type contact_type_enum,
    contact_relation contact_type_enum,
    contact_status contact_type_enum,
    contact_call_attempts INTEGER, 
    contact_direct_mail_attempts INTEGER, 
    contact_sms_attempts INTEGER, 
    contact_rvm_attempts INTEGER, 
    contact_email_attempts INTEGER, 
    contact_last_call_attempt TIMESTAMP,
    contact_last_direct_mail_attempt TIMESTAMP,
    contact_last_sms_attempt TIMESTAMP,
    contact_last_rvm_attempt TIMESTAMP,
    contact_last_email_attempt TIMESTAMP,
    contact_last_marketing_offer_amount VARCHAR, 
    contact_gps point,
    created_on timestamp DEFAULT now() NOT NULL,
    updated_on timestamp DEFAULT now() NOT NULL
);


CREATE TRIGGER
    sync_lastmod
BEFORE UPDATE ON
    contact
FOR EACH ROW EXECUTE PROCEDURE
sync_lastmod();`);
};

exports.down = (pgm) => {
  pgm.sql(`DROP TABLE contact;`);
};
