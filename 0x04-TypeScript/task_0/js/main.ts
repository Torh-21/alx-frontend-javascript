interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "Torh",
  lastName: "Gent",
  age: 99,
  location: "Delta",
};

const studentTwo: Student = {
  firstName: "Grace",
  lastName: "Lisa",
  age: 23,
  location: "Oyo",
};

const studentsList: Array<Student> = [studentOne, studentTwo];
const table: HTMLTableElement = document.createElement("table");
const tBody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tBody.insertRow();
  const rowFirstName: HTMLTableCellElement = row.insertCell();
  const rowLocation: HTMLTableCellElement = row.insertCell();
  rowFirstName.innerHTML = student.firstName;
  rowLocation.innerHTML = student.location;
});

document.body.appendChild(table);
