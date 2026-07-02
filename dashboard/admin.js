// ===============================
// LOCAL STORAGE DATA
// ===============================

let subscribers =
JSON.parse(localStorage.getItem("subscribers")) || [];

let messages =
JSON.parse(localStorage.getItem("messages")) || [];

let projects =
JSON.parse(localStorage.getItem("projects")) || 8;

let visitors =
JSON.parse(localStorage.getItem("visitors")) || 5432;

// ===============================
// ELEMENTS
// ===============================

const subscriberTable = document.getElementById("subscriberTable");
const messageTable = document.getElementById("messageTable");

const subscriberCount = document.getElementById("subscriberCount");
const messageCount = document.getElementById("messageCount");
const projectCount = document.getElementById("projectCount");
const visitorCount = document.getElementById("visitorCount");

// ===============================
// INIT DASHBOARD
// ===============================

updateDashboard();

// ===============================
// UPDATE DASHBOARD
// ===============================

function updateDashboard() {

    displaySubscribers();
    displayMessages();

    subscriberCount.textContent = subscribers.length;
    messageCount.textContent = messages.length;
    projectCount.textContent = projects;
    visitorCount.textContent = visitors;

}

// ===============================
// DISPLAY SUBSCRIBERS
// ===============================

function displaySubscribers() {

    subscriberTable.innerHTML = "";

    for (const user of subscribers) {

        subscriberTable.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.date}</td>
            </tr>
        `;

    }

}

// ===============================
// DISPLAY MESSAGES
// ===============================

function displayMessages() {

    messageTable.innerHTML = "";

    for (const msg of messages) {

        messageTable.innerHTML += `
            <tr>
                <td>${msg.name}</td>
                <td>${msg.subject}</td>
                <td>${msg.status}</td>
            </tr>
        `;

    }

}

// ===============================
// ADD SUBSCRIBER
// ===============================

function addSubscriber(name, email) {

    const subscriber = {
        name: name,
        email: email,
        date: new Date().toLocaleDateString()
    };

    subscribers.push(subscriber);

    localStorage.setItem(
        "subscribers",
        JSON.stringify(subscribers)
    );

    updateDashboard();
}

// ===============================
// ADD MESSAGE
// ===============================

function addMessage(name, subject) {

    const message = {
        name: name,
        subject: subject,
        status: "New"
    };

    messages.push(message);

    localStorage.setItem(
        "messages",
        JSON.stringify(messages)
    );

    updateDashboard();
}

// ===============================
// RESET DATA (OPTIONAL TEST)
// ===============================

function resetDashboard() {

    localStorage.clear();

    subscribers = [];
    messages = [];
    projects = 8;
    visitors = 5432;

    updateDashboard();
}