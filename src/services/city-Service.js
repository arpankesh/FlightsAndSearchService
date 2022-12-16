const { CityRepository } = require("../repository/index.js");

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something is wrong in the Service layer");
            throw { error };
        }
    }

    async deleteCity(cityID) {
        try {
            const response = await this.cityRepository.deleteCity(cityID);
            return response;
        } catch (error) {
            console.log("Something is wrong in the Service layer");
            throw { error };
        }
    }

    async updateCity(cityID, data) {
        try {
            const city = await this.cityRepository.updateCity(cityID, data);
            return city;
        } catch (error) {
            console.log("Something is wrong in the Service layer");
            throw { error };
        }
    }

    async getCity(cityID) {
        try {
            const city = await this.cityRepository.getCity(cityID);
            return city;
        } catch (error) {
            console.log("Something is wrong in the Service layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;