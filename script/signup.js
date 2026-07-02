const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("Passwords do not match.");
        return;
    }

    const user = {
        fullname,
        email,
        phone,
        password
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u => u.email === email);

    if(exists){
        alert("Email already registered.");
        return;
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    form.reset();

    window.location.href = "login.html";

});