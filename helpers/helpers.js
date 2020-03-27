let addStudent = input => {
  let students = require(dataFilePath);
  students.push(input);
  saveStudents(students);
};

let saveStudents = students => {
  var json = JSON.stringify(students, null, 4);
  fs.writeFile(dataFilePath, json, "utf8", err => {
    console.log(err);
  });
};

let deleteStudent = name => {
  let students = require(dataFilePath);
  students = students.filter(ele => {
    return ele.name == name;
  });
  saveStudents(students);
};
