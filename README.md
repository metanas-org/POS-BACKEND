# App Commands:

## Run a Server in Production mode:

```bash
npm run start
```

## Run a Server in Development mode:

```bash
npm run dev
```

# Migrations:

## Create a new Migration File for Tenant Database :

You can use the following bash to create a new migration file for Tenant Database:

```bash

knex  migrate:make  'file_name'  -x  ts  --migrations-directory  ./src/database/migrations/tenants

```

For Catalouge migration make file using this command:

```bash

knex  migrate:make  'file_name'  -x  ts  --migrations-directory  ./src/database/migrations/catalouge

```

## Run migration :

You can use the following command to run the migrations

For Tenant :

```bash
npm run migrate:tenants
```

For Catalouge:

```bash
npm run migrate
```

# Seeders:

## Run the following command to make Seeder file:

For Tenants:

```bash
npm  run  seed:create  file_name
```

For Catalouge:

```bash
npx knex seed:make 'file_name' --knexfile ./src/database/knexfile.ts
```

## Run the following command to run seeders:

For Tenants :

```bash
npm run seed:tenants
```

For Catalouge :

```bash
npm run seed
```

# Docker Commands To Run:

# To build Docker Image:

```bash
docker build -t pos-backend .
```

# Create and Run Docker Container:

```bash
docker run -p 3000:3000 -d pos-backend
```
