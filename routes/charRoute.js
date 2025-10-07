const express = require("express")
const router = express.Router()

const characters = require('../data/characters')

router.route('/')
.get((req,res) => {
    if(req.query.length != undefined ){
        res.send("Query Param Passed.")
    }
    else if(req.query.alias !== undefined){
        console.log(req.query.alias)
        const findByAlias = characters.find(character => 
            character.alias.find(aliasName => aliasName.toLowerCase() == req.query.alias.toLowerCase())
        ) 
        console.log(findByAlias)
        res.json(
           {message: "Character found by alias. Loading character info..", data: findByAlias}
        )
    }

    else{
        res.json({message: "Characters found. Loading all..", data:characters})
    }
});


router.route('/:name')
.get((req,res) => {
    const findByName = characters.find(character => character.name.toLowerCase() == req.params.name.toLowerCase())
    if(findByName == undefined){
        res.json({message: `Character by the name of ${req.params.name} could not be found. Try searching via /q?alias=nameHere`})
    }
    res.json({message: `Character by the name of ${req.params.name} found. Loading information.`, data: findByName})
})

router.use((err,req,res,next) => {
    // couldn't find by name, attempt to find by alias, and return if none found.
    console.error(err)
    res.status(404)
    res.send("No character with that name has been found. Try searching by alias.")
})


module.exports = router