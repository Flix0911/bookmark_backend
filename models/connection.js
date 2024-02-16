// Dependencies Used
require("dotenv").config();
const mongoose = require("mongoose");

// Established Database Connection
mongoose.connect(process.env.DATABASE_URL);

// Export Connection 
module.exports = mongoose;