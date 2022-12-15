DROP TABLE IF EXISTS patron;
DROP TABLE IF EXISTS meal;

CREATE TABLE patron (
    id SERIAL,
    name TEXT
);

CREATE TABLE meal (
    id SERIAL,
    kind TEXT,
    calories INTEGER,
    patron_id INTEGER
);

INSERT INTO meal (kind, calories, patron_id) VALUES ('breakfast', 1200);
INSERT INTO meal (kind, calories, patron_id) VALUES ('lunch', 400);

INSERT INTO patron (name) VALUES ('Kyle');
INSERT INTO patron (name) VALUES ('John');