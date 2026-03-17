document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("number").value;

    let result = document.getElementById("result");

    if(!name || !email || !password || !age || !mobile){
        result.textContent = "All fields are required";
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        result.textContent = "Enter valid email";
        return;
    }

    if(password.length < 6){
        result.textContent = "Password must be at least 6 characters";
        return;
    }

    if(isNaN(age)){
        result.textContent = "Age must be numeric";
        return;
    }

    result.textContent = "Form Registered Successfully";
});