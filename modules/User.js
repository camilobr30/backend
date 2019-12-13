const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: Number,
    is_active: {
        type: Boolean,
        default: true
    },
    gender: {
        type: String,
        enum: ["M", "m", "F", "f", "O", "o"]
    },
    enrollment: {
        type:Boolean,
        default: false
    },
    hostess:{
        type:String,
        required:true
    }

}, {timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User