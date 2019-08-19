const express = require("express");
const app = express();
app.use(express.json());
app.use("/api", (req, res, next) => {
  console.log(
    `${req.method} Request on ${req.protocol}://${req.host}:${port}${
      req.originalUrl
    }`
  );
  next();
});

const employees = [
  { id: 1, name: "employee1" },
  { id: 2, name: "employee2" },
  { id: 3, name: "employee3" },
  { id: 4, name: "employee4" },
  { id: 5, name: "employee5" },
  { id: 6, name: "employee6" },
  { id: 7, name: "employee7" },
  { id: 8, name: "employee8" },
  { id: 9, name: "employee9" }
];

app.get("/api", (req, res) => {
  return res.send("Root response: API is working");
});

app.get("/api/employees", (req, res) => {
  return res.send(employees);
});

app.get("/api/employees/:id", (req, res) => {
  const result = employees.find(emp => emp.id === +req.params.id);
  if (!result)
    return res.status(404).send(`No data availbale with id ${req.params.id}`);
  return res.send(result);
});

app.post("/api/employees", (req, res) => {
  const newEntry = {
    name: req.body.name,
    id: employees.length + 1
  };
  employees.push(newEntry);
  return res.send(employees);
});

app.put("/api/employees", (req, res) => {
  const result = employees.find(emp => emp.id === +req.body.id);
  if (!result)
    return res.status(404).send(`No data availbale with id ${req.body.id}`);

  result.name = req.body.name;
  return res.send(employees);
});

app.delete("/api/employees/:id", (req, res) => {
  const result = employees.find(emp => emp.id === +req.params.id);
  if (!result)
    return res.status(404).send(`No data availbale with id ${req.params.id}`);

  employees.splice(employees.indexOf(result), 1);
  return res.send(employees);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${[port]}`);
});
