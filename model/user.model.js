const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {type: String, require:true},
    title: {type: String, require:true, unique: true},
    description: {type: String, require:true},
    date: {type: Date, require:true}
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {UserModel}