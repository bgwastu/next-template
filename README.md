# Next.js Starter Kit

A comprehensive and opinionated starter kit for creating modern web projects with Next.js and TypeScript.

## Features

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Bun](https://bunjs.dev/) - Package manager and task runner
- [ESLint](https://eslint.org/) - Linting utility
- [Prettier](https://prettier.io/) - Code formatter
- [Mantine](https://mantine.dev/) - React components library
- [Tailwind CSS](https://tailwindcss.com/) with [tailwind-preset-mantine](https://github.com/songkeys/tailwind-preset-mantine) - Combine Tailwind CSS with Mantine
- [PostHog](https://posthog.com/) - Product analytics
- [Tabler Icons](https://tabler-icons.io/) - SVG icons collection
- [Husky](https://typicode.github.io/husky/) - Git hooks made easy
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [PostgreSQL](https://www.postgresql.org/) with Docker Compose

## Getting Started

1. Clone the repository
2. Install dependencies: `bun install`
3. Copy `.env.example` to `.env.local` and fill in the required environment variables
4. Run the development server: `bun run dev`

## Available Scripts

- `dev`: Start the development server
- `build`: Build the production application
- `start`: Start the production server
- `lint`: Run ESLint
- `lint:fix`: Run ESLint and automatically fix issues
- `format`: Format code using Prettier
- `prepare`: Set up Husky hooks
- `db:studio`: Start Drizzle Studio
- `db:generate`: Generate Drizzle migrations
- `db:migrate`: Run Drizzle migrations

## Database Setup

1. Ensure Docker and Docker Compose are installed on your system
2. Run `docker-compose up -d` to start the PostgreSQL container
3. Use the provided Drizzle commands to manage your database schema
