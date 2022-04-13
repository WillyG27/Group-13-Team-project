DROP DATABASE IF EXISTS arable_land_manager;
CREATE DATABASE arable_land_manager;
USE arable_land_manager;

CREATE TABLE field (
	field_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    size VARCHAR(255),
    soil_type VARCHAR(255)
);

CREATE TABLE crop_activity (
	crop_activity_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	start_date VARCHAR(255),
	crop VARCHAR(255),
    field_id INTEGER NOT NULL,
    FOREIGN KEY (field_id) REFERENCES field (field_id) ON DELETE CASCADE
);
