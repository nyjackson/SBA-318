const express = require("express");
const router = express.Router();

const books = require("../data/books");

router.route("/").get((req, res) => {
  if (req.query.type != undefined) {
    const searchByType = books.filter(
      (book) => book.type.toLowerCase() == req.query.type
    );
    res
      .status(200)
      .json({
        message: "Loading all novels by type " + req.query.type,
        data: searchByType,
      });
  } else {
    res.status(200).json({ message: "Loading all novels", data: books });
  }
});

router.route("/:title").get((req, res) => {
  const searchByTitle = books.filter((book) =>
    book.title.toLowerCase().includes(req.params.title)
  );
  res
    .status(200)
    .json({
      message: "Loading all novels with the matching title " + req.params.title,
      data: searchByTitle,
    });
});

module.exports = router;
