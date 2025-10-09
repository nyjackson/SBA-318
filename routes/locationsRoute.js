const express = require("express");
const router = express.Router();
const locations = require("../data/locations");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ message: "Loading all locations", data: locations });
  })
  .post((req, res) => {
    locations.push(req.body);
    res.status(201).json({ message: "Location successfully added.", data: req.body });
  });
  

router
  .route("/:name")
  .get((req, res) => {
    const getByName = locations.filter(
      (location) => location.name.toLowerCase() == req.params.name
    );
    console.log(getByName);
    if (getByName)
      res.status(200).json({
        message: "Loading all locations named " + req.params.name,
        data: getByName,
      });
    else
      res.status(404).json({
        message: "No locations by the name of " + req.params.name + " found",
        data: req.params,
      });
  })
  .put((req, res) => {
    const locationIndex = locations.findIndex(
      (loc) => loc.name.toLowerCase() == req.params.name.toLowerCase()
    );
    console.log(locationIndex);
    if (locationIndex !== -1) {
      locations[locationIndex] = { ...locations[locationIndex], ...req.body };
      res.status(200).json({
        message: "Data successfully changed.",
        data: req.body,
        dataToUpdate: locations[locationIndex],
      });
    }
     else {
      res.status(409).json({
        message: "Unable to locate location name or update properties listed.",
        data: req.body,
      });
    }
  })
  .delete((req, res) => {
    const locationToDelete = locations.find((location, i) => {
      if (location.name == req.params.name) {
        locations.splice(i, 1);
        return true;
      }
    });
    //not working
    if (locationToDelete)
      res.status(200).json({
        message: "Location successfully deleted.",
        data: locationToDelete,
      });
    else
      res.status(404).json({
        message: "Location deleted and/or not found.",
        data: req.body,
      });
  });

module.exports = router;
