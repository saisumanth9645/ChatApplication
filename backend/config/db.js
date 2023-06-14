const mongoose = require("mongoose");
const colors = require("colors");

/**
 * Mongo DB connection
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:admin@chatapp.irp39dj.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
