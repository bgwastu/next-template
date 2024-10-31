# Local Development Docs

## Local Database

1. First, run `devbox run init_local_db` to fix `pg_ctl: directory "/Users/.../.devbox/virenv/postgresql/data" is not a database cluster directory`
2. Run the database server by `devbox services up`
3. Then, run `createdb yourdatabasename` to create the database
4. There is no username or password to connect to the database. Just make sure the database name is correct.
