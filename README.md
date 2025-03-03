# Awesome Cakes

## Prerequisites

- Docker (docker-compose)
- Node 22.13.1
- Pnpm 9.15.2

## Getting Started

To run the app locally, please run the following commands at the root folder:

1. Start by installing the required node modules. This is done by running `pnpm install`. Since pnpm workspaces are used for this project, `pnpm install` will install all packages required by both the frontend and backend.

2. Next, start a Postgres instance via docker-compose. This is done with this command:

```bash
pnpm run postgres-start
```

You should now have a running Postgres instance on port 5432 with a default schema called `cakes_local`.

3. Copy `cakes-api/.env.sample` to `cakes-api/.env`. This will specify the connection URL for the migration and data seeding.

4. Initiate the cakes table by running the required migration:

```bash
pnpm --filter cakes-api run db-migrate
```

5. Seed the DB with some sample cake entities:

```bash
pnpm --filter cakes-api run db-seed
```

6. Finally, run this command to start both the backend and frontend:

```bash
pnpm start
```

The API should be reachable on `http://localhost:8080` while the frontend should now be running on `http://localhost:5173/`.

![Homepage](/img/homepage.png)

### Optional

After adding some cakes, you can revert the DB to its original state (after the seeding) with:

```bash
pnpm run --filter cakes-api run db-reset
```

Cleanup: Run this to stop and remove the Postgres instance (add `-v` to remove the volume too - this will then require running the migration/seeding again):

```bash
pnpm run postgres-stop
```

## Demo

https://github.com/user-attachments/assets/ea2ca369-5449-41ca-aa4d-9047b3165c63

## Tech Stack

- DB
  - Postgres
- Frontend
  - TypeScript
  - Vite
  - React
  - Tailwind CSS
  - Tanstack Query
  - React Hook Form
- Backend
  - TypeScript
  - Express
  - Prisma ORM

## Potential Improvements

- Add a `users` table so that users -> cakes is a one-to-many relationship.
- Add authentication and load the cakes for the currently signed-in user.
- Add CI (e.g., GitHub Actions, Google Cloud Build, etc.).
- Deploy the app (e.g., GCP Google Cloud Run, GKE, Vercel, etc.).
- Add integration/e2e tests.
- Use i18n translations instead of hardcoded labels.
