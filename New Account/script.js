Form = document.getElementById("form");
InName = document.getElementById("name");
InNameError = document.getElementById("nameError");
InUsername = document.getElementById("username");
InUsernameError = document.getElementById("usernameError");
InEmail = document.getElementById("email");
InEmailError = document.getElementById("emailError");
InPhoen = document.getElementById("phone");
InPassword = document.getElementById("password");
InPasswordError = document.getElementById("passwordError");
InConfirmPassword = document.getElementById("confirmPassword");
InConfirmPasswordError = document.getElementById("confirmPasswordError");
SubmitBtn = document.getElementById("submit");

function Validate(){
    let IsValid = true;
    let Name = InName.value.trim();
    let Username = InUsername.value.trim();
    let Email = InEmail.value.trim();
    let Password = InPassword.value.trim();
    let ConfirmPassword = InConfirmPassword.value.trim();
    if(Name === ""){
        IsValid = false;
        InNameError.removeAttribute("hidden")
    } else {
        InNameError.setAttribute("hidden", "")
    }
    if(Username === ""){
        IsValid = false;
        InUsernameError.removeAttribute("hidden")
    } else {
        InUsernameError.setAttribute("hidden", "")
    }
    if(Email === ""){
        IsValid = false;
        InEmailError.removeAttribute("hidden")
    } else {
        InEmailError.setAttribute("hidden", "")
    }
    if(Password === ""){
        IsValid = false;
        InPasswordError.removeAttribute("hidden")
    } else {
        InPasswordError.setAttribute("hidden", "")
    }
    if(ConfirmPassword === ""){
        IsValid = false;
        InConfirmPasswordError.removeAttribute("hidden")
    } else {
        InConfirmPasswordError.setAttribute("hidden", "")
    }
    if(Password === "" || Password !== ConfirmPassword){
        IsValid = false;
        InConfirmPasswordError.innerText = "Password does not match"
        InConfirmPasswordError.removeAttribute("hidden")
    } else {
        InConfirmPasswordError.setAttribute("hidden", "")
    }
    return IsValid;
}

function UpdateLocalStorage(){
    let Name = InName.value.trim();
    let Username = InUsername.value.trim();
    let Email = InEmail.value.trim();
    let Phone = InPhoen.value.trim();
    let Password = InPassword.value.trim();
    localStorage.setItem("name", Name)
    localStorage.setItem("username", Username)
    localStorage.setItem("email", Email)
    localStorage.setItem("phone", Phone)
    localStorage.setItem("password", Password)
    window.location.href = "../Home Page/index.html"
}

InName.addEventListener("input", Validate)
InUsername.addEventListener("input", Validate)
InEmail.addEventListener("input", Validate)
InPassword.addEventListener("input", Validate)
InConfirmPassword.addEventListener("input", Validate)

Form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(Validate()){
        UpdateLocalStorage()
    }
})
// function check(){
//     let Name = InName.value.trim();
//     let Username = InUsername.value.trim();
//     let Email = InEmail.value.trim();
//     if(Name === ""){
//         InNameError.removeAttribute("hidden")
//     } else {
//         InNameError.setAttribute("hidden", "")
//     }
//     if(Username === ""){
//         InUsernameError.removeAttribute("hidden")
//     } else {
//         InUsernameError.setAttribute("hidden", "")
//     }
//     if(Email === ""){
//         InEmailError.removeAttribute("hidden")
//     } else {
//         InEmailError.setAttribute("hidden", "")
//     }
// }

// From.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let Name = InName.value.trim();
//     let Username = InUsername.value.trim();
//     let Email = InEmail.value.trim();
//     let Phone = InPhoen.value.trim();
//     let Password = InPassword.value.trim();
//     let ConfirmPassword = InConfirmPassword.value.trim();
//     if((Password === ConfirmPassword) != "" && Username != ""){
//         localStorage.setItem("username", Username)
//         localStorage.setItem("password", Password)
//         function others(Name = Unkonwn, Email = Unkonwn, Phone = Unkonwn){
//             localStorage.setItem("name", Name)
//             localStorage.setItem("email", Email)
//             localStorage.setItem("phone", Phone)
//         }
//         others(Name, Email, Phone)
//         window.location.href = "../Home Page/index.html"
//     }
// })