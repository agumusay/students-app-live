const express = require("express");
const router = express.Router();

let students = [
  {
    name: "Rupert",
    lastname: "Jalili",
    age: 30,
    class: "FBW101",
    location: "BER"
  }
];

let logInteraction = (req) => {
  let url = req.baseUrl;
  let payload = req.body;
  console.log(`
      ${req.method} on ${url}
      payload: ${JSON.stringify(payload)}
  `)
}

// - GET (all, individual)
router.get("/", (req, res) => {
  res.status(200).json(students);
  logInteraction(req)
});

router.get("/:name", (req, res) => {
  const student = students.find(
    ({ name }) => name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (student) {
    return res.status(200).json(student);
  }

  res.status(404).json({ error: "Student not found" });
  logInteraction(req)
});

// - PUT (individual)
router.put("/:name", (req, res) => {
  if (req.params.name && req.body) {
    students = students.map((student) => {
      if (student.name.toLowerCase() === req.params.name.toLowerCase()) {
        Object.assign(student, req.body);
      }

      return student;
    });
  }
  logInteraction(req)
  res.send(students);
});
// - DELETE (individual)
router.delete("/:name", (req, res) => {
  if (req.params.name) {
    students = students.filter(
      ({ name }) => name.toLowerCase() !== req.params.name.toLowerCase()
    );
  }
  logInteraction(req)
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
  logInteraction(req)
  res.send("NO!");
});

module.exports = router;
