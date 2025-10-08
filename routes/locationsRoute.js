const express = require("express")
const router = express.Router()
const locations = require("../data/locations")

router.route('/')
.get((req,res) => {
    res.json({message: "Loading all locations", data: locations})
})

router.route('/:name')
.get((req,res) => {
    const getByName = locations.filter(location => location.name.toLowerCase() == req.params.name)
    res.json({message: "Loading all locations named ()", data: getByName})
})


module.exports = router