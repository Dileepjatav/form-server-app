const expres=require('express');
const Form_data=require('./db/formModel')
const path=require('path')
const app=expres();
require('./db/connection')
const cors=require('cors')
const dotenv=require('dotenv');

dotenv.config();
app.use(expres.json())
app.use(
    cors({
        origin:"*",
    })  
)

app.use(expres.static(path.join(__dirname,'./views')));


app.get('/mongo_html',(req,res)=>{
   
    res.sendFile(path.join(__dirname,"views","mongo.html"))

})

app.get('/mongo_data',(req,res)=>{
    Form_data.find({},(err,data)=>{
        if(err){
            res.send(err)
            console.log(err)
        }else{
            console.log(data)
            res.send(data)
        }

    })
})

app.post('/post_form_data', (req,res)=>{
  
    const {category,model,serial,date,file}=req.body
    
   

    const clientformdata= new Form_data({
        category,
        model,
        serial_num:serial,
        date,
        file_Pth:file
    })
    

    clientformdata.save()
    .then(()=>{
        res.json({
            data:"save scusseful"
        })

    })
    .catch((e)=>{
        res.json({
            error:e.message
        })
    })

    

})

const port=process.env.PORT || 3000;
app.listen( port,()=>{
    console.log("Server run on port num "+port)
})