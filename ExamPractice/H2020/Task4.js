let v = [2, 4, 6];

// a
console.log("each element of v multiplied by 3:", v.map(x => x * 3))

// b
console.log("each element index of v added by 2:", v.map((x,i) => i + 2))

// c
console.log("elements of v larger than 3:", v.filter(x => x > 3))

// d
console.log("sum of element indexes of v:", v.reduce((sum,x,i) => sum + i,0))
let grades = [
    { student: 'Ola', grade: 'C' },
    { student: 'Kari', grade: 'B' },
    { student: 'Knut', grade: 'B' },
    ];

// e
console.log("Did any student get D:", grades.some(x => x.grade == 'D') ? 'Yes' : 'No')

// f
console.log("Students that got B:", grades.filter(x => x.grade == 'B').map(x => x.student))

// g
console.log("Ola's grade:", grades.find(x => x.student == 'Ola').grade)