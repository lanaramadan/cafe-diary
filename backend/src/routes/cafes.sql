DROP TABLE IF EXISTS cafes;
CREATE TABLE IF NOT EXISTS cafes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address TEXT,
    latitude FLOAT,
    longitude FLOAT
);