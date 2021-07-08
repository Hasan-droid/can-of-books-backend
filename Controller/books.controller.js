'use strict'
const usermodel=require('../Model/user.model')

const bookscontroller=(req , res)=>{
const search=req.query.email;
usermodel.findOne({email:search}, (err,user)=>{
    if (!user){
        res.send('not found')
        console.log('not found')
    }else
    {
        console.log(user)
        res.json(user.book)
    //res.json(user.books);
   
    }
});

}

module.exports=bookscontroller;