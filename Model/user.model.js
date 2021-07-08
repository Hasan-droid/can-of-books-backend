'user strict'
const mongoose=require('mongoose');
const bookSchema=require('./books.model')
const userSchema=mongoose.Schema({
     email:{type:String},
    book:[bookSchema]
})

const userModel=mongoose.model("Userschema" ,userSchema)



// const userSeeds=()=>{
//     const richdadpoordad={
//         name:'Rich Dad Poor Dad',
//         description:'Author robert kaysaki',
//         status:'Active'
//     }
//     const whyrichgettingricher={
//         name:'Why rich getting richer',
//         description:'Author robert kaysaki',
//         status:'Active'
//     }

//     const hasan=new userModel({
//         email:"baydoun.net@hotmail.com",
//         book:[richdadpoordad , whyrichgettingricher]
//     })
//     hasan.save();
//     return(hasan);
//     console.log(hasan);
   
// }

module.exports=userModel;