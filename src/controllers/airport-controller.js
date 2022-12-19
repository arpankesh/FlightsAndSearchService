const { AirportService } = require("../services/index.js");

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message: "Successfully created the airport",
            data: response,
            err: {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Cannot create a airport"
        })
    }
}

module.exports = {
    create
}
