let v = [2, 4, 6];

console.log("add 2 to each element of v:", v.map(e => e + 2));
console.log("divide each element of v by 2:", v.map(e => e / 2));
console.log("add element index to each element of v:", v.map((e,i) => e + i));
console.log("sum of v, after multiplying each element of v by 2:", v.map(e => e * 2).reduce((a,b) => a +b));

let students = [{ name: 'Ola', age: 20 }, { name: 'Kari', age: 25 }, { name: 'Knut', age: 30 }];

console.log("average student age:", students.map(e => e.age).reduce((a,b) => a+b)/students.length);
console.log("students with name starting with K:", students.filter(x => x.name[0] == 'K'));
console.log("is Ola a student:", students.some(a => a.name == "Ola") ? 'Yes' : 'No');
console.log("all students are aged 22 or older:", students.every(a => a.age > 22) ? 'Yes' : 'No');