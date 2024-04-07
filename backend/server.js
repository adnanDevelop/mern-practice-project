require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnection = require("./utils/db");
const router = require("./routes/auth-route");
const errorMiddleware = require("./middlewares/error-middleware");

/*
This line of code add express middleware that parse incomming request bodies with json payloads. It's important to place this before any route  that need to handle  json data in the request body
*/

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  dbConnection();
  console.log("Server is running at port : 4000");
});
