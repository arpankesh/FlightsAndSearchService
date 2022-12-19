const { ClientErrorCodes } = require("../utils/error-codes.js");

const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        // If any of the above details are not present
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request for creating a flight",
            error: "Missing mandatory properties to create a flight"
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}