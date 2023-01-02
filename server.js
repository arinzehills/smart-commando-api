require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const server = http.createServer(app);
const db = process.env.DB_URL;
// const db = "mongodb://localhost:27016/radiant_db";
require("./config/mongo.js")(db);
app.use(cors());
app.use(express.json()); //making sure the server can use json, this is use to make the app able to use json
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes/user.route"));
app.use("/", require("./routes/device.route"));
app.use("/", require("./routes/survelliance.route"));
server.listen(port, () => {
  console.log(`Listening on port:: http://localhost:${port}/`);
});
