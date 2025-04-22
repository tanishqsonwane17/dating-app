const mongoose = require('mongoose')
function dbConnection(){
    mongoose.connect("mongodb://0.0.0.0/Lovebite").then(()=>{
        console.log('connected with db')
    }).catch((err)=>{
        console.log('error connecting with db',err)
    })
}
module.exports = dbConnection