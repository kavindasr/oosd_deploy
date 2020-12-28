async function showUsers(){
    try{
        const url = "http://192.168.1.8:8000/api/uTable/uName&uType";
        const cUsers = await apiCall("GET",url);
        
        cUsers.forEach(v=>{
          const ul = document.getElementById("cUser");
          const li = document.createElement("li");
          li.className = "list-group-item";
          const cont = v.user_name + "  -  " + (v.user_type).toUpperCase();
          li.innerHTML = cont;
          ul.appendChild(li);
        });
      }catch(e){
        alert("Cannot Load!");
      }
}


async function addusernew() {
    var emp_Name = document.getElementById("addusername").value;
    var emp_type = (document.getElementById("adduserselection").value);
    var pswd1 = (document.getElementById("adduserpassword12").value);
    var pswd2 = (document.getElementById("adduserpassword34").value);
    
    console.log(emp_Name,emp_type,pswd1,pswd2);
    var userObj = {
        password: pswd1,
        userName: emp_Name,
        userType: emp_type,
    };

    if (emp_Name!="" && pswd1!=""){
        if (pswd1==pswd2){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.status == 406) {
                    alert("Username already exist")
                    window.location.reload();
                }else{
                    alert("User Added Successfully..");
                    window.location.reload();
                }
            };
            xhttp.open("POST", "http://192.168.1.8:8000/signup", true);
            xhttp.send(JSON.stringify(userObj));
        }else{
            alert("Passwords doesn't match!!")
        }
    }
    else{
        alert("Please fill all the fields!!!");
    }
    
}

function showPass() {
    var x = document.getElementById("adduserpassword12");
    var y = document.getElementById("adduserpassword34");
    if (x.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }
