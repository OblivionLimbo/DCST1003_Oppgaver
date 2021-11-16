import { pool } from './mysql-pool';

let studentList = document.getElementById('studentList');
let selStud = document.getElementById("selStud");
let errorMsg = document.getElementById("errorMsg");
// let allowDelete = document.getElementById("delete");

// Perform select-query that fetches all the Students table rows from the database
// pool.query('SELECT * FROM Students', (error, results) => {
//   if (error) return console.error(error); // If error, show error in console (in red text) and return

//   for (let student of results) {
//     let li = document.createElement('li');
//     li.innerText = student.name + ', ' + student.email;
//     studentList.appendChild(li);
//   }
// });

display()

function display() {
  while (studentList.firstChild) {
    studentList.removeChild(studentList.firstChild);
  }
  while (selStud.firstChild) {
    selStud.removeChild(selStud.firstChild);
  }
  pool.query('SELECT * from Students', (error,results) => {
    if(error){
      console.error(error.message);
      return;
    }
    for(let student of results){
      let opt = document.createElement('option');
      opt.innerText = student.name;
      opt.value = student.id;
      selStud.appendChild(opt);
    }
    for(let student of results) {
      let li = document.createElement('li');
      li.innerText = student.name + ', ' + student.email;

      let btn = document.createElement('button');
      btn.innerText = 'Remove Student';
      btn.id = student.id;
      btn.value = student.id;
      btn.className = "delBtn";
      // btn.style.visibility = 'hidden';
      btn.onclick = () => {
        let confirmAction = confirm("Are you sure you want to delete this student?");
        if(confirmAction){
          pool.query('DELETE FROM Students WHERE id=?', [student.id], (error) => {
            if(error){
              console.error(error.message);
              return;
            }
          })
          display();
        }
        else{
          alert("Action Cancelled");
        }
      }
      li.appendChild(btn);
      studentList.appendChild(li);
      
    }
   })
}

document.getElementById("insertStudent").onclick = () => {
  let name = document.getElementById("name").value;
  let email = String(document.getElementById("email").value).toLowerCase()
  if (name == "" || email == "") {
    errorMsg.style.visibility = 'visible';
    errorMsg.innerText = 'You need to set values for both fields';
    return;
  }
  errorMsg.innerText = "";
  errorMsg.style.visibility = 'hidden';
  pool.query(
    'INSERT into Students (name,email) VALUES (?,?)', [name,email], (error,results) => {
      if(error){
        console.error(error.message);
        return;
      }
    }
  )
  display();
}

document.getElementById("changeName").onclick = () => {
  let id = document.getElementById("selStud").value;
  let newName = document.getElementById("newName").value;
  if(newName == ""){
    errorMsg.style.visibility = 'visible';
    errorMsg.innerText = 'You need to set a value for the new name';
    return;
  }
  errorMsg.style.visibility = 'hidden';
  pool.query('UPDATE Students SET name=? WHERE id=?', [newName,id], (error) => {
    if(error){
      console.error(error.message);
      return;
    }
  })
  display();
}
document.getElementById("changeEmail").onclick = () => {
  let id = document.getElementById("selStud").value;
  let newEmail = String(document.getElementById("newEmail").value).toLowerCase();
  if(newEmail == ""){
    errorMsg.style.visibility = 'visible';
    errorMsg.innerText = 'You need to set a value for the new email';
    return;
  }
  errorMsg.style.visibility = 'hidden';
  pool.query('UPDATE Students SET email=? WHERE id=?', [newEmail,id], (error) => {
    if(error){
      console.error(error.message);
      return;
    }
  })
  display();
}
// let count = 0;
// allowDelete.onclick = () => {
//   pool.query('SELECT * from Students', (error,results) => {
//     if(error){
//       console.error(error.message)
//       return;
//     }
//     for(let student of results){
//       if(count % 2 === 0){
//         allowDelete.innerText = "Enabled"
//         allowDelete.style.color = 'green'
//         document.getElementById(student.id).style.visibility = 'visible'
//       }
//       if(count % 2 === 1){
//         allowDelete.innerText = "Disabled"
//         allowDelete.style.color = 'red'
//         document.getElementById(student.id).style.visibility = 'hidden'
//       }
//     }
//     count+= 1;
//    })
  
// }