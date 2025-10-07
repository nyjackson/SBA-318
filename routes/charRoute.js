const express = require("express")
const router = express.Router()

const characters = require('../data/characters')

router.route('/')
.get((req,res) => {
    // res.send("Reached chars.")
    if(req.query.length != undefined ){
        res.send("Query Param Passed.")
    }
    else{
        res.json({message: "Characters found. Loading all..", data:characters})
    }
});

router.route('/:name')
.get((req,res) => {
    // res.send("Reached chars.")
    const findByName = characters.filter(char =>{ character.name == req.params.name})
    res.json({message: `Character by the name of ${req.params.name}found. Loading information.`, data: findByName})
})

router.use((err,req,es,next) => {
    // couldn't find by name, attempt to find by alias, and return if none found.
})

module.exports = router