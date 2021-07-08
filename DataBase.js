const mongoose=require('mongoose');
const homecontroller = require('./Controller/home.controller');
const userModel=require('./Model/user.model')

mongoose.connect('mongodb://localhost:27017/favBooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const database=('/database' ,homecontroller)

module.exports=database;