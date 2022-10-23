const mongoose =require('mongoose');

const schema=mongoose.Schema

const formdataSchema=new schema({
    category:{
        type:String,
    },
    model:{
        type:String
    },
    serial_num:{
        type:String
       
    },
    date:{
        type:String
    },
    file_Pth:{
        type:String
    }
})


const formdata=mongoose.model('formdata',formdataSchema)


module.exports=formdata

