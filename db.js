const mongoose = require("mongoose");
const asyncHandler = require("./middleware/asyncHandler");

module.exports = asyncHandler(async () => {
  const connection = await mongoose.connect(
    "mongodb://127.0.0.1:27017/custumer-database"
  );
  connection
    ? console.log("Conexión éxitosa a la BD")
    : console.log("Error en conexion a la BD");
});
