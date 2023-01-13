const mongoose = require("mongoose");
const Book = require("../models/book");

// GET all books

const booksGet = (req, res) => {
  Book.find()
    .sort({ createdAt: -1 })
    .then((books) => res.json(books))
    .catch((err) => res.json({ error: err.message }));
};

// GET book

const bookGet = (req, res) => {
  if (mongoose.isValidObjectId(req.params.id))
    Book.findById(req.params.id)
      .then((book) => res.json(book))
      .catch((err) => res.json({ error: err.message }));
  else res.json({ error: "invalid book id" });
};

// POST book

const bookPost = (req, res) => {
  Book.create(req.body)
    .then((createdBook) => res.json(createdBook))
    .catch((err) => res.json({ error: err.message }));
};

// DELETE book

const bookDelete = (req, res) => {
  if (mongoose.isValidObjectId(req.params.id)) {
    Book.findByIdAndDelete(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.json({ error: err.message }));
  } else {
    res.json({ error: "invalid book id" });
  }
};

module.exports = { booksGet, bookGet, bookPost, bookDelete };
