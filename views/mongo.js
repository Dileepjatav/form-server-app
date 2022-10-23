const loading=document.querySelector('#loader');
const container=document.querySelector('.container-box')

function getdatafromdb(){
  
  fetch("http://localhost:3000/mongo_data")
  .then((res)=>{
    return res.json();
    
  })
  .then((data)=>{
    loading.classList.add("hide")
    const arr=data;
    arr.reverse();
    createlist(arr)
  })
  

}
getdatafromdb()

function createlist(arr){
  arr.forEach((element)=>{
    let box=document.createElement('div');
    box.setAttribute("class","box");

    let upper_flex_box=document.createElement('div')
    upper_flex_box.classList.add("flex" )
    upper_flex_box.classList.add("detailHEad")

    //block for id and Date Element ---------------------------------

    //id block------------------------------
    let id_block_element=document.createElement('div')
    id_block_element.classList.add("flex")
    let id_text=document.createElement('p');
    id_text.classList.add("serial");
    id_text.innerText=element._id;
    let id_Name=document.createElement('span')
    id_Name.innerText="Id :"

    id_block_element.appendChild(id_Name);
    id_block_element.appendChild(id_text)

    //Date block----------------------------------
    let date_div_block=document.createElement('div')
    date_div_block.classList.add("flex")
    let p_date_text=document.createElement('p');
    p_date_text.classList.add("Date");
    p_date_text.innerText=element.date;
    let date_name=document.createElement('span')   
    date_name.innerText="Date :"

    date_div_block.appendChild(date_name);
    date_div_block.appendChild(p_date_text)
    
    //upper block appending----------------------
   
    upper_flex_box.appendChild(id_block_element)
    upper_flex_box.appendChild(date_div_block)

    //lower block creating for category model file serial---------------------
    let divdetail=document.createElement('div');
    divdetail.classList.add("detail")

    //serail block----------------
    let divserial=document.createElement('div')
    divserial.classList.add("serial")

    let serialspn=document.createElement('span')   
    serialspn.innerText="Serial number :"
    

    let pserial=document.createElement('p')
    pserial.innerText=element.serial_num

    divserial.appendChild(serialspn)
    divserial.appendChild(pserial);

    

    //category block-------------------------
    let divcate=document.createElement('div')
    divcate.classList.add("category")

    let catespn=document.createElement('span')   
    catespn.innerText="Category :"
    

    let pcate=document.createElement('p')
    pcate.innerText=element.category

    divcate.appendChild(catespn)
    divcate.appendChild(pcate);
    

    //model block-------------------------
    let divmodel=document.createElement('div')
    divmodel.classList.add("Model")

    let modelspn=document.createElement('span')   
    modelspn.innerText="Model :"

    let pmodel=document.createElement('p')
    pmodel.innerText=element.model

    divmodel.appendChild(modelspn)
    divmodel.appendChild(pmodel);
    
    //file block-------------------------
    let divfile=document.createElement('div')
    divfile.classList.add("file")

    let filespn=document.createElement('span')   
    filespn.innerText="File :"
    

    let pfile=document.createElement('p')
    pfile.innerText=element.file_Pth

    divfile.appendChild(filespn)
    divfile.appendChild(pfile);
    
    // //-----------------------------
    divdetail.appendChild(divserial)
    divdetail.appendChild(divcate)
    divdetail.appendChild(divmodel)
    divdetail.appendChild(divfile)

    //finial block appending-------------------

    box.appendChild(upper_flex_box)
    box.appendChild(divdetail)

    container.appendChild(box)

  })

  

}







