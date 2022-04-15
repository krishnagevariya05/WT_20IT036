function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById('email').value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML= "Your Email Address is valid."
        text.style.color = "rgb(17, 78, 9)";

    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML= "Please Enter Valid Email Address";
        text.style.color = "rgb(235, 17, 17)";

    }
    if(email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML= ""
        text.style.color = "000ff00";

    }
}

// Phone Number validation 
let check = document.querySelector(".check");
let number = document.querySelector(".number");
let text = document.querySelector(".text");

let regex = /^[\d,\s,\+,\-]{5,20}/;
check.addEventListener("click",()=>{
    if(number.value=="")
    {
        text.innerText="Plese Enter Your Phone Number";
        text.style.color="aliceblue";
    }
    else if(number.value.match(regex))
    {
        text.innerText="Enter Phone Number is valid";
        text.style.color="aliceblue";
    }
    else{
        text.innerText="Enter Phone Number is Invalid";
        text.style.color="aliceblue";
    }
});

// Zipcode validation
function Myzipcoded(){
    var str = document.getElementById("zipcode").value;
    var zipcodealert = document.getElementById("zipcode-alert");
    if(!((/^[0-9]{6}$/.test(str))))
    {
        zipcodealert.innerHTML="Zipcode must be only of 6 digits";
        zipcodealert.style.color="aliceblue";
        zipcodeflag=false;
    }
    else{
        zipcodealert.style.display="none";
        zipcodeflag=true;
    }
}

// Creditcard Number Validation

function cardnumber(){
    var credit = document.getElementById("credit").value;
    var creditalert = document.getElementById("credit-alert");
    if(!(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/))
    {
        creditalert.innerHTML="Creditcard number is not valid.";
        creditalert.style.color="aliceblue";
        zipcodeflag=false;
    }
    else{
        creditalert.style.display="none";
        zipcodeflag=true;
    }
}