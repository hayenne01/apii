const mongoose=require('mongoose')
const schema=mongoose.Schema


const contactSchema=new schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})
module.exports=mongoose.model('Contact',contactSchema)