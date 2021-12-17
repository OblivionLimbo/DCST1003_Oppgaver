let v = [2, 4, 6];

// a

console.log("each element of v subtracted by 4:", v.map(x => x - 4))

// b

console.log("each element of v added by its index:", v.map((x,i) => x + i))

// c

console.log("elements of v that are 4 or larger:", v.filter(x => x >= 4))

// d

console.log("elements of v as a string and surrounded by '-':", `-${v.map(x => x).join("-")}-`)

let students = [
    { id: 1, name: 'Kari' },
    { id: 2, name: 'Ola' },
    { id: 3, name: 'Knut' },
  ];

// e

console.log("ids of students that have name starting with 'K':", students.filter(x => x.name[0] == 'K').map(x => x.id))

// f

console.log("sum of ids of students that have name starting with 'K':", students.filter(x => x.name[0] == 'K').map(x => x.id).reduce((a,b) => a + b))

// g

console.log("is there a student with id 5:", students.some(x => x.id == 5) ? 'Yes' : 'No')