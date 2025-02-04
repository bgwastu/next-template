-- TODO: Update this file as required for your project
--
DROP ROLE IF EXISTS postgres;

CREATE USER postgres WITH CREATEDB CREATEROLE LOGIN;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;