const loginForm = document.getElementById("loginForm");
const error = document.getElementById("loginError");
const forgot = document.getElementById("forgotPassword");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u =>
        u.email === email &&
        u.password === password
    );

    if(user){

        // Hide any previous error
        error.style.display = "none";
        forgot.style.display = "none";

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        window.location.href = "admin/dashboard.html";

    }else{

        // Show the error message
        error.textContent = "Incorrect email or password.";
        error.style.display = "block";

        // Show the Forgot Password link
        forgot.style.display = "block";

    }

});