async function removeemp(){
    
    var empid = document.getElementById("idnum").value;

    const url = `${domain}/api/employee?empid=${empid}`;
    const url2 = `${domain}/api/employee/all?empid=${empid}`;

    const data = await apiCall("GET",url2);
    if (data.length!=0){
        try{
            var result = confirm("Want to delete Employee?");
            if (result) {
                const data1 = await apiCall("DELETE",url);
                alert("Employee removed successfully");
                window.location.reload();
            }
        }
        catch(e){
            alert("Error occured");
            window.location.reload();
        }
    }else{
        alert("Employee doesn't exist");
        window.location.reload();
    }
}