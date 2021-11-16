// Task 1
let v = [1, 2, 3];

// add 2 to each element of v: [ 3, 4, 5 ]

let vPlus2 = v.map((num) => num + 2);
console.log(`Multiply each element of v by 2: ${vPlus2}`)

// multiply each element of v by 2: [ 2, 4, 6 ]

let vTimes2 = v.map((num) => num * 2);
console.log(`Multiply each element of v by 2: ${vTimes2}`);

// sum of v: 6

let vSum = v.reduce((num,sum) => sum + num, 0);
console.log(`Sum each element of v: ${vSum}`);

// mean of v: 2

// each element of v as string: [ '1', '2', '3' ]
// v as string: v[0] = 1, v[1] = 2, v[2] = 3

// Task 2

let students = [
    { name: 'Ola', grade: 'A' },
    { name: 'Kari', grade: 'C' },
    { name: 'Knut', grade: 'C' },
  ];

// students-elements as strings: [ 'Ola got A', 'Kari got C', 'Knut got C' ]
// Kari got: C
// Did everyone get C: No
// How many got C: 2
// Percentage of C grades: 66.66666666666667
// Did anyone get A: Yes
// Did anyone get F: No