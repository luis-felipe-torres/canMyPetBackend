Creation of dummy data:

- Creation of the seed: npx sequelize-cli seed:generate --name _[name]_
- Insertion in the database of the seeds: npx sequelize-cli db:seed:all
- Delete of the dummy data: npx sequelize-cli db:seed:undo --seed _[name]_

Migrations of database based on information in config/config.json

- Ayuda con la migracion: npx sequelize-cli db:migrate --help
- Migrar la database: npx sequelize-cli db:migrate
- Deshacer la migracion de la database: npx sequelize-cli db:migrate:undo:all
