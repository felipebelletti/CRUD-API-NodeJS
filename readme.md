# CRUD API focused on business license management
## Description
Awesome API Rest using Express + PostgreSQL via Prisma, focused on business software license management, supporting custom license types.
## Swagger Documentation
Swagger documentation is available here
## Installation/Execution
### Deploying/configuring database schema (via scripts)
1. Create a `.env` file following the .env.template schema.
2. Then, type `yarn installdb` to push the initial database data and to load the prisma environment.
### Deploying/configuring database schema (manually)
1. Create a `.env` file following the .env.template schema.
2. Push initial database data by typing `npx prisma db push`
3. Load prisma environment by typing `npx prisma generate`
### Running the API
1. To install the local dependencies, just type `yarn install`
2. Then, to start the API, type `yarn prod`
## FAQ/Issues
If you have any questions or find any bugs, please, feel free to open an issue.
## Additional integration with other database engines
Thanks to Prisma, this API can also be deployed to MYSQL databases.