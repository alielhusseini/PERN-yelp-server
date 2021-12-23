-- SQLSHELL:

-- for help \?
-- for all databases \l
-- for connecting to another database \c nameDatabase (CREATE DATABASE dbName)
-- list all tables \d (if there's a specific table \d tableName) (CREATE TABLE tableName)

-- PG:
-- CREATE TABLE restaurants (
--     res_id BIGSERIAL PRIMARY KEY,
--     res_name VARCHAR(50) NOT NULL,
--     res_location VARCHAR(50) NOT NULL,
--     res_price_range INT NOT NULL check(
--         res_price_range >= 1 and res_price_range <= 5
--     )
-- );
-- CREATE TABLE reviews (
--     rev_id BIGSERIAL PRIMARY KEY,
--     rev_res_id_fk BIGINT REFERENCES restaurants(res_id) NOT NULL,
--     rev_name VARCHAR(50) NOT NULL,
--     rev_review TEXT NOT NULL,
--     rev_rating INT NOT NULL check(
--         rev_rating >=1 and rev_rating <=5 
--     )
-- );
-- INSERT INTO restaurants(res_name, res_location, res_price_range) VALUES('mcdonalds', 'new york', 3);
-- SELECT * FROM restaurants
-- INSERT INTO reviews(rev_res_id_fk, rev_name, rev_review, rev_rating) VALUES(1,'ali', 'Not bad for stoners', 3);