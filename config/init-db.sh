#!/bin/bash
DB_NAME=local
PGHOST=localhost

# DB does not exist
if ! psql -h $PGHOST -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
  echo "[Postgres] Creating database..."
  createdb -h $PGHOST $DB_NAME
  echo "[Postgres] Done"
fi

# `postgres` user does not exist
if ! psql -h $PGHOST -d $DB_NAME -c "SELECT 1 FROM pg_roles WHERE rolname='postgres'" | grep -q 1; then
  echo "[Postgres] Setting permissions..."
  psql -h $PGHOST -d $DB_NAME -f config/db-permissions.sql
  echo "[Postgres] Done"
fi