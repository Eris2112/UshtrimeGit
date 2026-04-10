let users = [];

function addUser() {
    const input = document.getElementById("username");
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a name");
        return;
    }

    users.push(name);
    input.value = "";
    renderUsers();
}

function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
}

function renderUsers() {
    const list = document.getElementById("userList");
    list.innerHTML = "";

    users.forEach((user, index) => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <span>${user}</span>
            <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
        `;

        list.appendChild(div);
    });
}