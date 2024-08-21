**Project Title**: CanMyPetEat

**Description**:
CanMyPetEat is an application designed to help pet owners determine which foods are safe for their animals. Through a detailed database that includes different types of pets and foods, users can check whether a specific food is safe or dangerous for their pet. The app offers an intuitive interface that allows users to search for specific foods, add new foods to the database, and get recommendations based on the relationship between foods and pets. CanMyPetEat aims to improve the health and well-being of pets by providing reliable and easily accessible information about their diet.

**_Key Features_**:

**Food Query**: Allows users to verify if a food is safe for their pet.
**Pet Management**: Users can add, update, and delete information about their pets.
**Food Relationships**: Determines and displays whether a pet can consume a specific food.
**Intuitive Interface**: Easy to use, designed so any pet owner can access the necessary information without hassle.

**_It's very important that the users read the information present in Swagger [URL]/api-docs/_**

**Creation of dummy data**:

- Creation of the seed: npx sequelize-cli seed:generate --name _[name]_
- Insertion in the database of the seeds: npx sequelize-cli db:seed:all
- Delete of the dummy data: npx sequelize-cli db:seed:undo --seed _[name]_

**Migrations of database based on information in config/config.json**

- Help with the migrations: npx sequelize-cli db:migrate --help
- Migrate the database: npx sequelize-cli db:migrate
- Undo the migration to the database: npx sequelize-cli db:migrate:undo:all
