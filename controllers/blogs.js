const { blogsModel } = require("../models/blog");

const getBlogs = (req, res) => {
  blogsModel
    .find({})
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};
// the empty object signals that i want to find everything inside the document

const getBlog = (req, res) => {
  const { id } = req.params;
  blogsModel.findById(id).then((blog) => {
    res.json(blog).catch((err) => {
      res.status(500).send(err.message);
    });
  });

  //  I can find or filter depending on a specific parameter, i can do as follows: <<blogsModel.find({title: 'title one', author: 'author one'})>>
  // further references n how to do this can be found in the mongoose documentation
};

const createBlog = (req, res) => {
  const { title, author, body } = req.body;

  blogsModel
    .create({ title, author, body })
    .then((newBlog) => {
      res.json(newBlog);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const updateBlog = (req, res) => {};
const deleteBlog = (req, res) => {};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
