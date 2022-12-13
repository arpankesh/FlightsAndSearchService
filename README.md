# Welcome to Flights Service

## Project Setup :-
    - clone the project on your local
    - execute "npm install" on the same path as your root directory of the downloaded project
    - create a `.env` file in your root directory and add the following environment variables :-
        - `PORT = 3000`
    -inside the src/config folder add the following piece of json :-
    -inside the src/config folder add the following piece of code :-
        ```
        {
            "development": {
                "username": "<YOUR_DB_LOGIN_NAME>",
                "password": "<YOUR_DB_PASSWORD>",
                "database": "Flights_Search_DB_DEV",
                "host": "127.0.0.1",
                "dialect": "mysql"
            }
        }
        ```
    -Once you have added the db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`


We are doing Role/Task based proj dev, not feature based (In the latter we could have seperate folders for flights, search etc. and each folder can then have models, controllers, services etc.)

/
    -src/
        index.js //server
        models/
        controllers/
        services/
        repositories/
        utils/  //for any extra utility functions or constants which is going to be
                //common throughout the codebase. It is kind of like a helper
                //file or helper function
        config/ //to store our DB configurations or any other config we need later on
        middlewares/
    
    -tests/ [later]