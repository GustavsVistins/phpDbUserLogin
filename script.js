let user = "user";
let pass = "pass";
let div = document.querySelector("div");
let h2 = document.querySelector("h2");

console.log("Working...");

var userl = document.getElementById("user");
var passl = document.getElementById("pass");



function Login(){
    if(userl.value == user){
        if(passl.value = pass){
            console.log("Logged in.");

            div.style.display="none";

            cDiv.style.display="grid";
            cDiv.style.justifyContent="center";
        }
    }
    userl.value = "";
    passl.value = "";
}

