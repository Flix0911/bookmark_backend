// DEPENDENCIES
const mongoose = require("./connection");

// Schema
const userSchema = new mongoose.Schema({
   username: {type: String, required: true, unique: true},
   password: {type: String, required: true},
})

// Model
const User = mongoose.model("User", userSchema);

// Export
module.exports = User;