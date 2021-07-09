'use-strict'
const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    status: { type: String }
})



//const bookModel=mongoose.Model('bookSchema' , bookSchema)

module.exports = bookSchema;


