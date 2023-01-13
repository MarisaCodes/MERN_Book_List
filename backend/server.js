const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const router = require("./routes/booksRoutes");
// connect to mongodb
const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/react_book_app")
  .then(() => {
    app.listen(3050);
  })
  .catch((err) => console.log(err));

// middleware

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// books routes
app.use("/api/books", router);
