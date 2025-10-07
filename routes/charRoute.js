const express = require("express")
const router = express.Router()

router.route('/')
.get((req,res) => {
    res.send("Reached chars.")
})

module.exports = router