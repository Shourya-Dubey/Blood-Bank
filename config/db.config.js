const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongoDB DATABASE ${mongoose.connection.host}`.bgMagenta.white);
    }
    catch(error){
        console.log(`mongoDB DATABASE error ${error}` .bgRedred.white);
    }
}

module.exports = connectDB;