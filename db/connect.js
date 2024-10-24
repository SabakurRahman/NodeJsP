// required mongos
const mongoose = require("mongoose");
// connect to db
const url =
  "mongodb+srv://sabakur12360:iQyFyn80ItyUFj37@cluster0.mpmvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
