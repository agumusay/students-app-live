const express = require("express");
const router = express.Router();
let Path = require('path');
const fs = require('fs').promises;
const { students } = require("../data/students.json")

const parseJson = async (file) => {
  let filePath = Path.join(process.env.PWD, 'data', file);
  let jsonData = await fs.readFile(filePath, 'utf-8')
  return jsonData;
}
parseJson('students.json').then(console.log)
// - GET (all, individual)
router.get("/", async (req, res) => {
  let students = await parseJson('students.json');
  res.status(200).json(students);

});
router.get("/:name", async (req, res) => {
  let students = await parseJson('students.json');
  const student = students.find(
    ({ name }) => name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (student) {
    return res.status(200).json(student);
  }
  res.status(404).json({ error: "Student not found" });
});
// - PUT (individual)
router.put("/:name", async (req, res) => {
  if (req.params.name && req.body) {
    let students = await parseJson('students.json');
    students = students.map((student) => {
      if (student.name.toLowerCase() === req.params.name.toLowerCase()) {
        Object.assign(student, req.body);
      }
      return student;
    });
  }
  res.send(students);
});
// - DELETE (individual)
router.delete("/:name", async (req, res) => {
  if (req.params.name) {
    let students = await parseJson('students.json');
    students = students.filter(
      ({ name }) => name.toLowerCase() !== req.params.name.toLowerCase()
    );
  }
  res.send(students);
});
// - POST (individual)
router.post("/", (req, res) => {
  if (req.body) {
    students.push(req.body);
    return res.send({
      status: "success",
      message: `student with name: ${req.body.name} added`
    });
  }
  res.send("NO!");
});

module.exports = router;
