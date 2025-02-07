#!/bin/bash
set -e # Exit on error

DB_NAME=local
PGHOST=localhost

# If data directory does not exist or is empty, create it
if [ ! -d ".devbox/virtenv/postgresql/data" ] || [ -z "$(ls -A .devbox/virtenv/postgresql/data)" ]; then
  echo "[Postgres] Creating data directory..."
  mkdir -p ".devbox/virtenv/postgresql/data" || { echo "Failed to create data directory"; exit 1; }
  initdb -D ".devbox/virtenv/postgresql/data" || { echo "Failed to initialize database"; exit 1; }
  echo "[Postgres] Done"
fi

# DB does not exist
if ! psql -h $PGHOST -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
  echo "[Postgres] Creating database..."
  createdb -h $PGHOST $DB_NAME || { echo "Failed to create database"; exit 1; }
  echo "[Postgres] Done"
fi

# `postgres` user does not exist
if ! psql -h $PGHOST -d $DB_NAME -c "SELECT 1 FROM pg_roles WHERE rolname='postgres'" | grep -q 1; then
  echo "[Postgres] Setting permissions..."
  psql -h $PGHOST -d $DB_NAME -f config/db-permissions.sql || { echo "Failed to set permissions"; exit 1; }
  echo "[Postgres] Done"
fi