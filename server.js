'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/favBooks', { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const database = require('./DataBase')

// const {booksroute,
//   createbook
// }=require('./Controller/books.controller');
const { bookscontroller,
  createbook,
  deleteBook,
  updatebook } = require('./Controller/books.controller');
const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {
  response.send('test');

})
const client = jwksClient({
  jwksUri: `https://${process.env.AUTH0_DOMAIN_NAME}/.well-known/jwks.json`
});

const getKey = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey)
  });
}

app.get('/authorize', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, (err, user) => {
    if (err) {
      res.send('invalid token');
    }
    //  res.send(user)
  })
  res.send(token);
})

app.get('/database', database)
app.get('/books', bookscontroller)
app.post('/add-book', createbook);
app.delete('/removebook/:index', deleteBook)
app.put('/updatebook/:index',updatebook);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
