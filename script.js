// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
  // TODO: Get user input to create and return an array of employee objects

  let employeesArray = [];
  
  function collectEmployees () {
        let addEmployees = true;

        while (addEmployees) {
            let firstName = prompt("Please add employee's first name:");
            let lastName = prompt("Please add employee's last name:");
            let salaryAnswer = prompt("Please enter employee's salary:");
            let salary = isNaN(parseInt(salaryAnswer)) ? 0 : parseInt(salaryAnswer);
            
            employeesArray.push(
                {
                firstName: firstName,
                lastName: lastName,
                salary: salary
                });
        
            let continuePrompt = prompt("Do you wish to add more employees? (continue/cancel)");
            addEmployees = continuePrompt.toLowerCase() === "continue";
        }
        
        return employeesArray;
    };


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let salarySum = employeesArray.reduce((total, employeesArray) => total + employeesArray.salary, 0);
  let salaryTotal = salarySum / employeesArray.length;
  console.log(`The average employee salary between our employee(s) is $${salaryTotal}`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    const randomNumber = Math.floor(Math.random() * employeesArray.length);
    const chosenEmployee = employeesArray[randomNumber];
    console.log(`Congratulations to ${chosenEmployee.firstName} ${chosenEmployee.lastName}, our random drawing winner!`);

    return chosenEmployee;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
