const password = document.querySelector(".password");
const text = document.querySelector(".text");
const check = document.querySelector(".check");

let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
check.addEventListener("click", ()=>{
    if(password.value == ""){
        text.innerHTML = "Please Enter An Email Address";
        text.style.color = "#000";
    } else if(password.value.match(regex)){
        text.innerHTML = "Congrats! You Enter A Valid Email Address";
        text.style.color = "rgba(4,125,9,1)";
    } else{
        text.innerHTML = "Sorry! Your Email Adress is Invalid";
        text.style.color = "rgba(255,0,0,1)";
    }
})