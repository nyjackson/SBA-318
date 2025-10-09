const express = require("express");
const router = express.Router();

const characters = require("../data/characters");

router.route("/").get((req, res) => {
  if (req.query.length != undefined) {
    res.status(404).json({
      message: "Undefined Query Param Passed.",
      query_param: req.query,
    });
  } else if (req.query.alias !== undefined) {
    console.log(req.query.alias);
    const findByAlias = characters.find((character) =>
      character.alias.find((aliasName) => {
        const partsOfAlias = aliasName.split(" ");
        const partFound = partsOfAlias.find(
          (word) => word.toLowerCase() == req.query.alias.toLowerCase()
        );
        return (
          partFound || aliasName.toLowerCase() == req.query.alias.toLowerCase()
        );
      })
    );
    res.status(200).json({
      message: "Character found by alias. Loading",
      data: findByAlias,
    });
  } else {
    res
      .status(200)
      .json({ message: "Loading all characters....", data: characters });
  }
});

router.route("/angels").get((req, res) => {
  const getAngels = characters.filter((char) => char.species == "Angel");
  res.status(200).json({ message: "Loading all angels....", data: getAngels });
});

router.route("/demons").get((req, res) => {
  const getDemons = characters.filter((char) => char.species == "Demon");
  res.status(200).json({ message: "Loading all demons....", data: getDemons });
});

router.route("/humans").get((req, res) => {
  const getHumans = characters.filter((char) => char.species == "Human");
  res.status(200).json({ message: "Loading all humans....", data: getHumans });
});

router.route("/horseperson").get((req, res) => {
  const getHorsePpl = characters.filter(
    (char) => char.species == "Horseperson of the Apocalypse"
  );
  res
    .status(200)
    .json({ message: "Loading all horsepeople....", data: getHorsePpl });
});

// Params
router.route("/:name").get((req, res) => {
  const findByName = characters.find((character) =>
    character.name.toLowerCase().includes(req.params.name.toLowerCase())
  );
  if (findByName == undefined) {
    return res.status(404).json({
      message: `Character by the name of ${req.params.name} could not be found. Try searching via /?alias=nameHere`,
    });
  }
  res.status(200).json({
    message: `Character by the name of ${req.params.name} found. Loading information.`,
    data: findByName,
  });
});

module.exports = router;
