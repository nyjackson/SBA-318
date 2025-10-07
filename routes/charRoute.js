const express = require("express")
const router = express.Router()

const characters = require('../data/characters')

router.route('/')
.get((req,res) => {
    // res.send("Reached chars.")
    res.json({message: "Characters found. Loading all..", data:characters})
})

module.exports = router