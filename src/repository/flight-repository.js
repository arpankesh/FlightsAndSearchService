const { Flight } = require("../models/index.js");

const { Op } = require("sequelize");

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        // if (data.minPrice) {
        //     filter.price = { [Op.gte]: data.minPrice };
        // }
        let priceFilter = [];
        if (data.minPrice) {
            priceFilter.push({ price: { [Op.gte]: data.minPrice } });
        }
        if (data.maxPrice) {
            priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
        }
        // // filter.price = { [Op.and]: priceFilter };
        Object.assign(filter, { [Op.and]: priceFilter });
        console.log(filter);
        console.log({ [Op.gte]: data.minPrice });
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;