DROP TABLE IF EXISTS visits;
CREATE TABLE IF NOT EXISTS visits (
    user_id INTEGER REFERENCES users (id),
    cafe_id INTEGER REFERENCES cafes (id),
    rating FLOAT CHECK (rating BETWEEN 1 AND 5),
    notes TEXT,
    pictures BYTEA[],
	PRIMARY KEY (user_id, cafe_id)
);