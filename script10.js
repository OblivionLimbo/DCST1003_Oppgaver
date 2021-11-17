// Task 1
let v = [1, 2, 3];

// add 2 to each element of v: [ 3, 4, 5 ]

console.log(
  `Multiply each element of v by 2: 
  ${v.map((a) => a + 2)}`
  );

// multiply each element of v by 2: [ 2, 4, 6 ]

console.log(
  `Multiply each element of v by 2: 
  ${v.map((a) => a * 2)}`
  );

// sum of v: 6

console.log(
  `Sum each element of v: 
  ${v.reduce((a,b) => a + b)}`
  );

// mean of v: 2

console.log(
  `The mean of v: 
  ${((v.reduce((a,b) => a + b)) / v.length)}`
  );

// each element of v as string: [ '1', '2', '3' ]

console.log(
  `Each element of v as a string: 
  ${JSON.stringify(v.map(String))}`
  );

// v as string: v[0] = 1, v[1] = 2, v[2] = 3

console.log(
  `v as string:
  ${listArr(v)}`
  );

function listArr(arr){

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

  const repeat = n => f => x =>
    n === 0 ? Done(x) : Bounce(repeat(n-1) (f), f(x))
  
  let a = (`${students[0].name} got ${students[0].grade}`).toString();
  let b = (`${students[1].name} got ${students[1].grade}`).toString();
  let c = (`${students[2].name} got ${students[2].grade}`).toString();

  let temp = [];
  temp.push(a,b,c)
  
  return JSON.stringify(temp)
}
// Kari got: C

console.log(
  `Kari got:
  ${grade('Kari')}`
  );

function grade(student){
  let a = students.find(({name}) => name === student);
  return a.grade;
}

// Did everyone get C: No

console.log(
  `Did everyone get C:
  ${"test"}`
  );

// How many got C: 2

console.log(
  `How many got C:
  ${"test"}`
  );

// Percentage of C grades: 66.66666666666667

console.log(
  `Percentage of C grades:
  ${"test"}`
  );

// Did anyone get A: Yes

console.log(
  `Did anyone get A:
  ${"test"}`
  );

// Did anyone get F: No

console.log(
  `Did anyone get F:
  ${"test"}`
  );
