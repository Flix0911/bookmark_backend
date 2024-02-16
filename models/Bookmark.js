const mongoose = require("./connection")

//place holder for Bookmark schema
const BookmarksSchema = new mongoose.Schema({
    title: String,
    url: String,
});

const Bookmark = mongoose.model("Bookmark", BookmarksSchema)

module.exports = Bookmark