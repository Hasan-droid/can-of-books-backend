'user strict'
const usermodle=require('../Model/user.model')

const homecontroller=(req , res)=>{
   const userObjects=usermodle();
    res.send(userObjects);
}

module.exports=homecontroller;