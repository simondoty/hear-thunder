var mongoose = require("mongoose");

var showSchema = mongoose.Schema({
    date: Date,
	band: String,
    venue: String,
    time: String,
    price: Number,
    link: String
});

module.exports = mongoose.model("show", showSchema, "showList");