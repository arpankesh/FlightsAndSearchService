const { Flight } = require("../models/index.js");

class FlightRepository {

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;