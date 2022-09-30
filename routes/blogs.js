const express = require("express");
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs");

const blogsRouter = express.Router();

blogsRouter.get("/", getBlogs);

blogsRouter.get("/", getBlog);

blogsRouter.post("/", createBlog);

blogsRouter.put("/", updateBlog);

blogsRouter.delete("/", deleteBlog);

module.exports = { blogsRouter };
