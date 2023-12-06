interface Student {
    firstName : string;
    lastName : string;
    age : number;
    location : string;
}
let student1: Student = {
    firstName : "Winnie",
    lastName : "Ngina",
    age : 30,
    location : "Nairobi"
}
let student2: Student = {
    firstName : "Terry",
    lastName : "Wambui",
    age : 21,
    location : "Nakuru"
}
let studentsList: Student[] = [student1, student2];
//create table
const table = document.createElement("table");
// Iterate over studentsList and create a new row for each student
studentsList.forEach((student) => {
    const row = document.createElement("tr");

// create and append first name cell
const firstNamecell = document.createElement("td");
firstNamecell.textContent = student.firstName;
row.appendChild(firstNamecell);

// create and append location cell
const locationCell = document.createElement("td");
locationCell.textContent = student.location;
row.appendChild(locationCell);

// Append row to table
table.appendChild(row);
});

// Append table to body
document.body.appendChild(table);