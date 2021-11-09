import fs from 'fs';

let studentList = document.getElementById('studentList');
let students = [];

display();

function display() {
  while (studentList.firstChild) {
    studentList.removeChild(studentList.firstChild);
  }
  fs.readFile('src/data.json', (error, data) => {
    if (error) {
      console.error(error.mesage);
      return;
    }
    students = JSON.parse(data);

    for (let i = 0; i < students.length; i++) {
      let li = document.createElement('li');
      li.innerText = `${students[i].name}, ${students[i].email}`;
      let button = document.createElement('button');
      button.innerText = 'X';
      button.onclick = () => {
        students.splice(i, 1);
        // console.log(students);
        fs.writeFile('src/data.json', JSON.stringify(students), (error) => {
          if (error) {
            console.error(error.mesage);
            return;
          }
          display();
        });
      };
      li.appendChild(button);
      studentList.appendChild(li);
    }
  });
}

let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');

document.getElementById('insert').onclick = () => {
  students.push({ name: nameInput.value, email: emailInput.value });
  fs.writeFile('src/data.json', JSON.stringify(students), (error) => {
    if (error) {
      console.error(error.mesage);
      return;
    }
  });
  display();
};