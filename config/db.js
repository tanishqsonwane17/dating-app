const mongoose = require('mongoose')
function dbConnection(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('connected with db')
    }).catch((err)=>{
        console.log('error connecting with db',err)
    })
}
module.exports = dbConnection