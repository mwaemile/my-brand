// ===============================
// MOBILE NAVIGATION MENU
// ===============================

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link){
    link.addEventListener("click", function(){
        navLinks.classList.remove("active");
    });
});


// ===============================
// CONTACT FORM
// ===============================

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");

const message = document.getElementById("message");


form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let text = messageInput.value.trim();

    // Validation

    if(name === "" || email === "" || text === ""){

        message.style.color = "red";
        message.innerHTML = "Please fill in all fields.";

        return;
    }

    // Email validation

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        message.style.color = "red";
        message.innerHTML = "Please enter a valid email address.";

        return;
    }

    // Success

    message.style.color = "green";
    message.innerHTML =
    "Thank you " + name + "! Your message has been sent successfully.";

    form.reset();

});


// ===============================
// SCROLL ANIMATION
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(function(section){

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// CHANGE NAVBAR ON SCROLL
// ===============================

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

});


// ===============================
// FOOTER YEAR
// ===============================

const footer = document.querySelector("footer p");

footer.innerHTML =
"© " + new Date().getFullYear() +
" Emile Mwami | All Rights Reserved";