const mongoose=require('mongoose');
const homecontroller = require('./Controller/home.controller');
const userModel=require('./Model/user.model')

mongoose.connect('mongodb+srv://hasan:0000@cluster0.evow2.mongodb.net/favBooks?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const database=('/database' ,homecontroller)

module.exports=database;