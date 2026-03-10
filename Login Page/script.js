InUsername = document.getElementById("username");
InPassword = document.getElementById("password");
UsernameResult = document.getElementsByClassName("UsernameResult")[0];
PasswordResult = document.getElementsByClassName("PasswordResult")[0];
ButtonResult = document.getElementsByClassName("buttonResult")[0];
Form = document.getElementById("form");

InUsername.addEventListener("input", function () {
    if (InUsername.value.length < 5) {
        UsernameResult.textContent = "Username must be at least 5 characters long";
        UsernameResult.style.color = "red";
    } else {
        UsernameResult.textContent = "";
    }
});
Form.addEventListener("submit", (e) => {
    e.preventDefault();
    let UserValue = InUsername.value;
    let PassValue = InPassword.value;
    let SavedPass = localStorage.getItem("password");
    let SavedUser = localStorage.getItem("username");
    if(SavedUser === UserValue && SavedPass === PassValue){
        window.location.href = "../Home Page/index.html";
    }else{
        ButtonResult.textContent = "Invalid username or password";
        ButtonResult.style.color = "red";
    }
})
