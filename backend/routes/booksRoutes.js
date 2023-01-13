const express = require("express");
const {
  booksGet,
  bookGet,
  bookPost,
  bookDelete,
} = require("../controllers/booksControllers");
const router = express.Router();

// GET books

router.get("/", booksGet);

// GET book

router.get("/:id", bookGet);

// POST book

router.post("/", bookPost);

// DELETE book

router.delete("/:id", bookDelete);

module.exports = router;
