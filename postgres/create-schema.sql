CREATE USER db_user_local WITH PASSWORD 'db_password_local';
ALTER USER db_user_local CREATEDB;

CREATE DATABASE cakes_local OWNER db_user_local;
GRANT ALL PRIVILEGES ON DATABASE cakes_local to db_user_local;
