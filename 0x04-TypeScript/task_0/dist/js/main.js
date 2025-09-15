var studentsList = [
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
    },
];
var table = document.createElement('table');
var headerRow = document.createElement('tr');
var headers = ['First Name', 'Location'];
headers.forEach(function (headerText) {
    var header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    var locationNameCell = document.createElement('td');
    locationNameCell.textContent = student.location;
    row.appendChild(locationNameCell);
    table.appendChild(row);
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map