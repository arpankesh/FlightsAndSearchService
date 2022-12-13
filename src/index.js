const express = require("express");
const { PORT } = require("./config/serverConfig.js");

const setupAndStartServer = async function () {
    // create the express object
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);   //This using `` is called as string interpolation
    })
};

setupAndStartServer();