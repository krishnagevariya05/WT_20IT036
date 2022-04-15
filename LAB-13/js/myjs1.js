
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if ( username == ""){
    document.getElementById(err_t).style.display="none";
    return false;
}
if ( password == ""){
    document.getElementById(err_p).style.display="none";
    return false;
}
return true;
}
