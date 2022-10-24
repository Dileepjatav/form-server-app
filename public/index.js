
const serial=document.querySelector('#serial');
const date=document.querySelector('#date')
const category=document.querySelector('#category')
const model=document.querySelector('#model')
const file=document.querySelector('#file');
const myform=document.querySelector('#myform');



const handle=(event)=>{
    event.preventDefault();

    if(serial.value.length!=0){
        const data={
            category:category.value,
            model:model.value,
            serial:serial.value,
            date:date.value,
            file:file.value
        }
    
        post_data_to_server(data)

    }
     
}



async function post_data_to_server(data){

    const payload= JSON.stringify(data)

    const response=await fetch('https://form-submit-dileepkhurana73.herokuapp.com/post_form_data',{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:payload
    });
    response.json()
    .then((data)=>{
        
        myform.reset()
        console.log(data)
        const str=data.data
        alert(str.toUpperCase())
        
    });


}

// async function mongo_html(){
//     console.log("clicked")
//     await fetch('http://localhost:3000/home')
//     .then((res)=>{
        
//     })
    
    
// }

