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
            const city = await City.update(data, {
                where: {
                    id: cityID
                }
            });
            return city;
        } catch (error) {

        }
    }

    async getCity(cityID) {
        try {
            const city = await City.findByPK(cityID);
            return city;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw { error };
        }
    }
};

module.exports = CityRepository;