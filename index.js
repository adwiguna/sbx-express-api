const express = require("express");
const app = express();
const { logger } = require("./middleware/logger");

app.use(express.json());
app.use("/api", logger);
app.use("/api/employees", require("./routes/api/employees"));

app.get("/api", (req, res) => {
  return res.send("Root response: API is working");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${[port]}`);
});
