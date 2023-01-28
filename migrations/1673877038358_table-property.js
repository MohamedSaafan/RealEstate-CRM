/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TYPE property_status_enum  AS ENUM ('New', 'Marketing', 'No Contact', 'Nurture', 'Drip', 'Not Interested', 'DNC', 'Do Not Want');
  
  CREATE TABLE property (
        property_id SERIAL PRIMARY KEY,
        property_referene VARCHAR,
        property_street_address VARCHAR,
        property_city VARCHAR,
        property_state_id INTEGER,
        property_zip_code VARCHAR ,
        property_zip_code_plus4 VARCHAR ,
        property_county_id INTEGER, 
        property_notes VARCHAR,
        property_status property_status_enum,  /* It's type is enum */
        property_list_id INTEGER,
        property_assigned_to INTEGER,
        property_contact_id INTEGER,
        property_gps point, /**https://postgis.net/docs/using_postgis_dbmanagement.html#PostGIS_Geography**/
        property_type VARCHAR,
        property_apn VARCHAR,
        property_apn2 VARCHAR,
        property_apn3 VARCHAR,
        property_acreage DECIMAL,
        zoning VARCHAR,
        legal_description VARCHAR,
        property_call_attempt INTEGER,
        property_direct_mail_attempt INTEGER,
        property_sms_attempt INTEGER,
        property_rvm_attempt INTEGER,
        property_email_attempt INTEGER,
        property_last_call_attempt TIMESTAMP,
        property_last_direct_mail_attempt TIMESTAMP,
        property_last_sms_attempt TIMESTAMP,
        property_last_rvm_attempt TIMESTAMP,
        property_last_email_attempt TIMESTAMP,
        property_additional_data JSON,
        created_on TIMESTAMP DEFAULT now() NOT NULL, 
        updated_on TIMESTAMP DEFAULT now() NOT NULL
    );
    
  

      CREATE TRIGGER
        sync_lastmod
      BEFORE UPDATE ON
        property
      FOR EACH ROW EXECUTE PROCEDURE
        sync_lastmod();


    `);
};

exports.down = (pgm) => {
  pgm.sql("DROP TABLE property");
};
