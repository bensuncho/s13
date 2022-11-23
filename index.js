require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const customers = require("./routes/customers");
const logger = require("morgan");

// Conexion a la base de datos
connection();
// middlewares
app.use(express.json());
app.use(cors());
app.use(logger());
// routes
app.use("/api/customers", customers);
// puerto
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Escuchando sobre el puerto ${port}`));
