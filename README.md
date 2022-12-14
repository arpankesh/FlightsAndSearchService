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
    -Once you have added the db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute :-
    `npx sequelize db:migrate`

## DB Design :-
    - Airport Table
    - Aeroplane Table
    - Flights Table
    - City Table

    -A flight belongs to one airplane, but 1 airplane can be used in many flights
    -A city has many airports but 1 airport belongs to 1 city
    -One airport can have many flights, but 1 flight belongs to one airport

## Tables

### City -> id, name, created_At, updated_At
### Airport -> id, name, address, city_id, created_At, updated_At
        Relationship -> One City can have many Airports, but one Airport belongs to one City (one to many)
```
 In the src folder, run :- npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

```


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