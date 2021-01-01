getData("gintype");
getData("gdetail")
//all gtypes
async function getData(table){
    try{
        gdata = await apiCall('GET', `${domain}/api/${table}/all`);
        console.log(gdata);
        renderHtmlGtype(gdata,table)
    }catch(e){
        console.log(e);
    }
}

//render retreived garbage details to the html page
function renderHtmlGtype(data,id){
    var htmlPart = "";
    for(i=0;i<data.length;i++){
        htmlPart += `<tr>
                        <td>${data[i].gindex}</td>
                        <td>${data[i].waste_type}</td>
                        <td>${data[i].unit_price}</td>
                    </tr>`;
    }
    //console.log(htmlPart);
    document.getElementById(id).innerHTML = htmlPart;
}
//Add new type
async function submitData(ele1,ele2,table){
    var gtyp=document.getElementById(ele1).value;
    var unitpr= document.getElementById(ele2).value;
    console.log(gtyp);

    if (gtyp==""||unitpr==""){
       alert("Required Fields are null. \nTry again..")
        return;
    }
    else{
        var gObj = {
            gtype    :   gtyp,
            unitp    :   unitpr     
        }; 
        console.log(gObj);

        
        try{
            await apiCall("POST",`${domain}/api/${table}`,gObj);
            if(!alert("New garbage type added..")){
                window.location.reload();
            }
        }catch(e){
            console.log(e);
            alert("Error. Please Try again..")
        }    
    }
}



//update type
async function updateData(ele1,ele2,table){
    var index=document.getElementById(ele1).value;
    var unitpr= document.getElementById(ele2).value;
    console.log(index);
    var validate;

    if (index==""||unitpr==""){
       alert("Required Fields are null. \nTry again..")
        return;
    }
    else{
        var gObj = {
            unitp    :   unitpr   
        }; 
        console.log(gObj);

        try{
            validate = await apiCall("HEAD",`${domain}/api/${table}/all?gID=${index}`);
        }
        catch(e){
            validate = e ;
        }
        if(validate == "Ok"){
            try{
                await apiCall("PUT",`${domain}/api/${table}?gID=${index}`,gObj);
                if(!alert("Data updated..")){
                    window.location.reload();
                }
            }catch(e){
                console.log(e);
                alert("Error. Please Try again..")
            }
        }
        else{
            alert("Invalid garbage index. Check and try again");
        }
    }
}

//delete type
async function deleteData(ele1,table){
    var index=document.getElementById(ele1).value;
    console.log(index);

    if (index==""){
        alert("Required Fields are null. \nTry again..")
        return;
    }
    else{
        try{
            validate = await apiCall("HEAD",`${domain}/api/${table}/all?gID=${index}`);
        }
        catch(e){
            validate = e ;
        }
        if(validate == "Ok"){
            try{
                await apiCall("DELETE",`${domain}/api/${table}?gID=${index}`);
                if(!alert("Data deleted..")){
                    window.location.reload();
                }
            }catch(e){
                console.log(e);
                alert("Error. Please Try again..")
            }
        }
        else{
            alert("Invalid garbage index. Check and try again");
        }
    }
       
}
