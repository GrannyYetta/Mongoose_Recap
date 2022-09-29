require("dotenv/config")
const express = require("express");
const { blogsRouter } = require("./routes/blogs");
const app = express();
const port = 5000;

app.use(express.json());

app.use("/blogs", blogsRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
