interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList: Student [] = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 20,
        location: "New York"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        age: 22,
        location: "Los Angeles"
    },]

const table = document.createElement('table');
const headerRow = document.createElement('tr');

const headers = ['First Name','Location'];
headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);

studentsList.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td')
    firstNameCell.textContent = student.firstName
    row.appendChild(firstNameCell)

    const locationNameCell = document.createElement('td')
    locationNameCell.textContent = student.location
    row.appendChild(locationNameCell)

    table.appendChild(row);
});

document.body.appendChild(table);