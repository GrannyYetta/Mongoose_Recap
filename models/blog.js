const mongoose = require("mongoose");
// here we are creating a table

const { Schema, model } = mongoose;

// a different way to do the same would be as follows:
// const Schema = mongoose.Schema;
// const model = mongoose.model;

const blogSchema = new Schema({
  title: String,
  author: String, // it could  be an array or this is generally a user, so it will be more complicated
  createdAt: { type: Date, default: Date.now },
});

// there are many SchemaTypes https://mongoosejs.com/docs/api/schematype.html

const blogsModel = model("Blog", blogSchema);

module.exports = {
  blogsModel,
};
