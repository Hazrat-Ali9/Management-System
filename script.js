let employees = [];

function addEmployee() {
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;

  if (name && profession && age) {
    const newEmployee = {
      id: generateUniqueId(),
      name: name,
      profession: profession,
      age: parseInt(age),
    };
    employees.push(newEmployee);
    displayEmployees();
    document.getElementById("successMessage").style.display = "block";
    setTimeout(() => {
      document.getElementById("successMessage").style.display = "none";
    }, 2000);
  } else {
    document.getElementById("errorMessage").style.display = "block";
    setTimeout(() => {
      document.getElementById("errorMessage").style.display = "none";
    }, 2000);
  }
}

function generateUniqueId() {
  return employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
}

function displayEmployees() {
  const list = document.getElementById("employeeList");
  list.innerHTML = "";

  if (employees.length === 0) {
    list.innerHTML = "<p>You have 0 Employees.</p>";
  } else {
    employees.forEach((employee) => {
      const listItem = document.createElement("div");

      const employeeDetails = document.createElement("div");
      employeeDetails.style.width = "auto";
      employeeDetails.style.height = "25px";
      employeeDetails.style.fontSize = "18px";
      employeeDetails.style.border = "1px solid white"; // Applying border to the wrapper div
      employeeDetails.style.borderRadius = "5px";

      const idSpan = document.createElement("span");
      idSpan.textContent = `${employee.id}.`;
      idSpan.style.margin = "5px";
      employeeDetails.appendChild(idSpan);

      const nameSpan = document.createElement("span");
      nameSpan.textContent = `Name: ${employee.name}`;
      nameSpan.style.margin = "5px";
      employeeDetails.appendChild(nameSpan);

      const professionSpan = document.createElement("span");
      professionSpan.textContent = `  Profession: ${employee.profession}`; // Added separator before profession
      professionSpan.style.margin = "5px";
      employeeDetails.appendChild(professionSpan);

      const ageSpan = document.createElement("span");
      ageSpan.textContent = `  Age: ${employee.age}`; // Added separator before age
      ageSpan.style.margin = "5px";
      employeeDetails.appendChild(ageSpan);

      listItem.appendChild(employeeDetails);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete User";
      deleteButton.style.width = "100px";
      deleteButton.style.padding = "3px";
      deleteButton.style.borderRadius = "15px";
      deleteButton.onclick = () => deleteEmployee(employee.id);
      listItem.appendChild(deleteButton);
      listItem.style.display = "flex";
      listItem.style.alignItems = "center";
      listItem.style.margin = "5px";
      list.appendChild(listItem);
    });
  }
}

function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  displayEmployees();
}
