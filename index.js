// Getting references to all required tags
let table = document.getElementById("user-table");
let formContainer = document.getElementById("formContainer");
let form = document.getElementById("form");
let addUserBtn = document.getElementById("addUser");

// User array
let users = [];

// Form submit logic
form.addEventListener("submit", (e) => {
    // Prevent default action on submit
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    if (name.value.length > 3) {

        if (users.length === 0) table.deleteRow(1);
        users.push({
            name: name.value,
            email: email.value.toLowerCase(),
        });
        // Update the table with submitted data
        updateTable();
        // reset the input fields
        form.reset()
    } else {
        alert("name has to be greater than 3 characters")
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function updateTable() {
    // get length of array for No. column
    let index = users.length;

    // Insert a row to the table bosy
    let row = document.getElementById("table-body").insertRow(-1);

    // insert 3 cells to the row and attch callbacks
    let cell1 = row.insertCell(0);
    cell1.innerHTML = `${index}`;
    cell1.addEventListener("click", () => {
        alert(`${index}`);
    });
    let cell2 = row.insertCell(1);
    cell2.innerHTML = `${users[index - 1].name}`;
    cell2.addEventListener("click", () => {
        alert(`${users[index - 1].name}`);
    });
    let cell3 = row.insertCell(2);
    cell3.innerHTML = `${users[index - 1].email}`;
    cell3.addEventListener("click", () => {
        alert(`${users[index - 1].email}`);
    });

    // Toggle form to hidden 
    formToggle();
}

const formToggle = () => {
    if (formContainer.classList.contains("hide")) {
        formContainer.classList.remove("hide");
        addUserBtn.classList.add("hide");
    } else {
        formContainer.classList.add("hide");
        addUserBtn.classList.remove("hide");
    }
};