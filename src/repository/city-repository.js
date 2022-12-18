//Imports the model City from the db obj of that file, which is imported as a class from model/city.js
const { City } = require("../models/index.js");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw { error };
        }
    }

    async deleteCity(cityID) {
        try {
            await City.destroy({
                where: {
                    id: cityID
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw { error };
        }
    }

    async updateCity(cityID, data) {
        try {
            // The below approach also works in mysql but will not return updated object. 
            // ((   It returns an array where the fist element is the no. of rows affected.
            // if we are using PgSQL then there is also a 2nd element
            // and we can access it by doing :- "returning: true" after "where: {}".    ))
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            // });
            // for getting updated data in mysql we use the below approach :-
            const city = await City.findByPk(cityID);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw { error };
        }
    }

    async getCity(cityID) {
        try {
            const city = await City.findByPk(cityID);
            return city;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw { error };
        }
    }

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw { error };
        }
    }
};

module.exports = CityRepository;