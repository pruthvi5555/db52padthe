const mongoose = require("mongoose")
const fanSchema = mongoose.Schema({
CompanyName: {
    type: String,
    minlength: 4,
    maxlength: 14,
},
fanType: {
    type: String,
    minlength: 4,
    maxlength: 14,
},
price:  {
    type:Number,
    min:1,
    max:100
}
})
module.exports = mongoose.model("fans", fanSchema)
