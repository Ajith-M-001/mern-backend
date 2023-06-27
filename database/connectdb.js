const mongoose = require("mongoose");
require("dotenv").config();

// Function to establish MongoDB connection
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Terminate the process on connection error
  }
};

// Export the MongoDB connection function
module.exports = connectToMongoDB;
