const express = require("express");
const router = express.Router();
const employees = require("../../dummy/employees");

router.get("/", (req, res) => {
  return res.send(employees);
});

router.get("/:id", (req, res) => {
  const result = employees.find(emp => emp.id === +req.params.id);
  if (!result)
    return res.status(404).send(`No data availbale with id ${req.params.id}`);
  return res.send(result);
});

router.post("/", (req, res) => {
  const newEntry = {
    name: req.body.name,
    id: employees.length + 1
  };
  employees.push(newEntry);
  return res.send(employees);
});

router.put("/", (req, res) => {
  const result = employees.find(emp => emp.id === +req.body.id);
  if (!result)
    return res.status(404).send(`No data availbale with id ${req.body.id}`);

  result.name = req.body.name;
  return res.send(employees);
});

router.delete("/:id", (req, res) => {
  const result = employees.find(emp => emp.id === +req.params.id);
  if (!result)
    return res.status(404).send(`No data availbale with id ${req.params.id}`);

  employees.splice(employees.indexOf(result), 1);
  return res.send(employees);
});

module.exports = router;
