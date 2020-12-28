
function logout(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Successfully logged out !!!");
        }
    };
    xhttp.open("GET", "http://192.168.1.8:8000/logOut", true);
    xhttp.send();

}