const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://root:root@cluster0-j6gtv.mongodb.net/Colegio?retryWrites=true&w=majority"

const User = require("./User")


mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    !err ? console.log("DB Connection successfully") : console.log(err)
})

module.exports = {
    User
}