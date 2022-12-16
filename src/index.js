// Setting up a server
const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig.js");
const ApiRoutes = require("./routes/index.js")

const setupAndStartServer = async function () {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);   //This using `` is called as string interpolation
    })
};

setupAndStartServer();