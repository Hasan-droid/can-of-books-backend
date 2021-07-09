'use strict'
const usermodel = require('../Model/user.model')

 



const bookscontroller = (req, res) => {
    const search = req.query.email;
    usermodel.findOne({ email: search }, (err, user) => {
        if (!user) {
            res.send('not found')
            console.log('not found')
        } else {
            console.log(user)
            res.json(user.book)
            //res.json(user.books);

        }
    });

}
const createbook=(req,res)=>{
    const {email,name}= req.body;
    
    usermodel.findOne({email:email}, (error, books)=>{
        console.log(books.book)
        if(error){
            res.send('error');
        }else{
            books.book.push({
                name:name,
                description:"private library",
                status:"active"
            })
            books.save();
            res.send(books.book);
        }
    })
        
}

const deleteBook=(req,res)=>{
    
    const email=req.query.email;
    const book_id=Number(req.params.index);
    console.log(email , book_id)
    usermodel.findOne({email:email}, (error, books)=>{
        let newBookArra=[];
        books.book.forEach((el,idx)=>{
            if(idx!==book_id){
                newBookArra.push(el);
            }
        })
        books.book=newBookArra;
        books.save();
        res.send(books.book)
    });

}

module.exports = {
    bookscontroller,
    createbook,
    deleteBook
};