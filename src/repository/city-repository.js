//Imports the model City from the db obj of that file, which is imported as a class from model/city.js
const { City } = require("../models/index.js");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
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
        } catch (error) {
            throw { error };
        }
    }
};

module.exports = CityRepository;