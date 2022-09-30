require("dotenv/config");
require("./db");
const express = require("express");
const { blogsRouter } = require("./routes/blogs");
const app = express();
const port = 5000;

app.use(express.json());

app.use("/blogs", blogsRouter);

// console.log(process.env.CONNECTION_STRING);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
