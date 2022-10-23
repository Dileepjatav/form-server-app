const mongoose=require('mongoose');


const username=encodeURIComponent("formdata");
const password=encodeURIComponent("formdata");
const dbName="Form_collection"

const url=`mongodb+srv://${username}:${password}@cluster0.lxqer64.mongodb.net/${dbName}?retryWrites=true&w=majority`
// const url=process.env.DATABASE

mongoose.connect(url)
.then(()=>{
    console.log("Database connected")
})
.catch((e)=>{
    console.log(e.message)
})