const configRoutes = require("./routes");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());
configRoutes(app);

app.listen(3000, () => {
    console.log("Server listening on port http://localhost:3000");
});

