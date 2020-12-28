function apiCall(method,url,data){
    document.getElementById("loader").style.display = "block";
    return new Promise((res,rej)=>{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("loader").style.display = "none";
                if(method == 'GET'){
                    var data = JSON.parse(this.responseText);
                    res(data);
                }
                else{
                    res("Ok");
                }
            }else if(this.readyState == 4 && (this.status == 405 || this.status == 406 || this.status == 400 || this.status == 500)){
                document.getElementById("loader").style.display = "none";
                rej("Error");
            }
        };
        xhttp.open(method, url, true);
        if(data){
            xhttp.send(JSON.stringify(data)); 
        }
        else{
            xhttp.send();
        }
    });
}

if(document.getElementById("userName")){
    document.getElementById("userName").innerHTML = sessionStorage.getItem("OOSD_session");
}
const domain = `http://192.168.1.8:8000`; //to reduce redundancy
