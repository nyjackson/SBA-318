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
      if (location.name == req.body.name) {
        locations.splice(i, 1);
        return true;
      }
    })
    //not working
    if (locationToDelete) res.json({message:"Location successfully deleted.",data:locationToDelete});
    else res.json({message:"Location deleted and/or not found.", data: req.body});
})
// .put((req,res) => {

// })

router.route('/:name')
.get((req,res) => {
    const getByName = locations.filter(location => location.name.toLowerCase() == req.params.name)
    console.log(getByName)
    if (getByName) res.json({message: "Loading all locations named " + req.params.name, data: getByName});
    else res.json({message: "No locations by the name of " + req.params.name + " found", data: req.params});
    
})


module.exports = router