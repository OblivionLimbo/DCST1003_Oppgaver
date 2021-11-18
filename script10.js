// Task 1
let v = [1, 2, 3];

// add 2 to each element of v: [ 3, 4, 5 ]

console.log(
  `Multiply each element of v by 2: ${v.map((a) => a + 2)}`
  );

// multiply each element of v by 2: [ 2, 4, 6 ]

console.log(
  `Multiply each element of v by 2: ${v.map(a => a * 2)}`
  );

// sum of v: 6

console.log(
  `Sum each element of v: ${v.reduce((a,b) => a + b)}`
  );

// mean of v: 2

console.log(
  `The mean of v: ${((v.reduce((a,b) => a + b)) / v.length)}`
  );

// each element of v as string: [ '1', '2', '3' ]

console.log(
  `Each element of v as a string: ${JSON.stringify(v.map(String))}`
  );

// v as string: v[0] = 1, v[1] = 2, v[2] = 3

console.log(
  `v as string:
  ${listArr(v)}`
  );

function listArr(arr){
  const a = arr.map((x,i) => ` v[${i}] = ${x}`);
  return a;
}

// Task 2

let students = [
    { name: 'Ola', grade: 'A' },
    { name: 'Kari', grade: 'C' },
    { name: 'Knut', grade: 'C' },
  ];

  

// students-elements as strings: [ 'Ola got A', 'Kari got C', 'Knut got C' ]

console.log(
  `Students-elements as strings: 
  ${listStud(students)}`
  );

function listStud(arr){
  // let temp = [];
  // arr.forEach(student => temp.push((`${student.name} got ${student.grade}`).toString()));
  const a = (arr.map(e => `${e.name} got ${e.grade}`));
  return JSON.stringify(a);
}

// Kari got: C

console.log(
  `Kari got:
  ${grade('Kari')}`
  );

function grade(student){
  const a = students.find(({name}) => name === student);
  return a.grade;
}

// Did everyone get C: No

console.log(
  `Did everyone get C:
  ${everyoneC(students)}`
  );

  function everyoneC(arr){
    const a = arr.every(x => x.grade === 'C')
    return a === true ? 'Yes' : 'No';
  }

// How many got C: 2

console.log(
  `How many got C:
  ${howManyC(students)}`
  );

  function howManyC(arr){
    const a = arr.filter(x => x.grade === 'C');
    return a.length;
  }

// Percentage of C grades: 66.66666666666667

console.log(
  `Percentage of C grades:
  ${percentageC(students)}`
  );

  function percentageC(arr){
    return howManyC(arr) / arr.length * 100;
  }

// Did anyone get A: Yes

console.log(
  `Did anyone get A:
  ${anyoneA(students)}`
  );

  function anyoneA(arr){
    const a = arr.some(x => x.grade === 'A' )
    return a === true ? 'Yes' : 'No';
  }

// Did anyone get F: No

console.log(
  `Did anyone get F:
  ${anyoneF(students)}`
  );

  function anyoneF(arr){
    const a = arr.some(x => x.grade === 'F' )
    return a === true ? 'Yes' : 'No';
  }
