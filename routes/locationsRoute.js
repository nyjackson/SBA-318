const express = require("express")
const router = express.Router()
const locations = require("../data/locations")
router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.route('/')
.get((req,res) => {
    res.json({message: "Loading all locations", data: locations})
})
.post((req,res) => {
locations.push(req.body)
res.json({message:"Location successfully added.", data: req.body})
})
.delete((req,res) => {
    const locationToDelete = locations.find((location, i) => {
      if (location.id == req.body.name) {
        locations.splice(i, 1);
        return true;
      }
    })
    if (locationToDelete) res.json({message:"Location successfully deleted.",locationToDelete});
    else next();
})

router.route('/:name')
.get((req,res) => {
    const getByName = locations.filter(location => location.name.toLowerCase() == req.params.name)
    if (getByName) res.json({message: "Loading all locations named " + req.params.name, data: getByName});
    else next();
    
})


module.exports = router