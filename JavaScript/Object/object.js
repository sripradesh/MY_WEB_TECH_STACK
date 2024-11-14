let student = {
    id : 306,
    name : "SRIPRADESH",
    marks : [78,80,95,89,49],
    subject : {web:90,python : 80},
    isPresent : true
}

// GET

console.log(student);
console.log(student.name);
console.log(student.marks);
console.log(student.subject);
console.log(student.subject.python);

// EDIT

student.isPresent = false
console.log(student);

// ADD

student.age = 24,
student.gender= "male"
console.log(student);

// DELETE

delete student.subject
console.log(student);






