const mongoose = require("mongoose")
const fanSchema = mongoose.Schema({
CompanyName: String,
fanType: String,
price: Number
})
module.exports = mongoose.model("fans", fanSchema)
