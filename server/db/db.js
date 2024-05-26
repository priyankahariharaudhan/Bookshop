const mongoose = require('mongoose');

//query to avoid depricated messages
mongoose.set('strictQuery', false);

const connectDB = async () => 
    {
    return await mongoose.connect("mongodb+srv://bhuvaneshraj:spencer@cluster0.yozdwjz.mongodb.net/Project-H?retryWrites=true&w=majority").then(()=>console.log("db connected succesfully")).catch(()=>console.log("error occured"));
}   
module.exports = connectDB;