/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TYPE task_status_enum  AS ENUM ('Open', 'In Progress', 'Completed');
CREATE TABLE task(
    task_id SERIAL PRIMARY KEY,
    task_due_date DATE,
    task_note VARCHAR,
    task_status  task_status_enum,
    task_staff INTEGER,
    task_contact INTEGER,
    task_property INTEGER,
    task_deal INTEGER,
    created_on timestamp DEFAULT now() NOT NULL,
    updated_on timestamp DEFAULT now() NOT NULL
);


CREATE TRIGGER
    sync_lastmod
BEFORE UPDATE ON
    task
FOR EACH ROW EXECUTE PROCEDURE
sync_lastmod();

`);
};

exports.down = (pgm) => {};
