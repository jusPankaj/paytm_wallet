const express = require("express");
const rootRouter = require("./routes/index");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.use("/api/v1", rootRouter);

app.listen(port, () => {
  console.log(`server is up and runnin port ${port}`);
});
