const express = require("express")
const app = express()
const port = 4000

const locationRoute = require("./routes/locationsRoute")
const charRoute = require("./routes/charRoute")
const bookRoute = require("./routes/bookRoute")
app.use(express.urlencoded({ extended: true }))

// Middleware
const logger = app.use((req,res,next) => {
console.log(`${req.method} on ${req.url}`)
next()
})

// Routes
app.use("/locations", locationRoute)
app.use("/characters", charRoute)
app.use("/books", bookRoute)

app.get("/quiz", (req, res) => {
res.send("Quiz Begin")
})

app.listen(port, () => {
    console.log(
        "Started listening on port ", port
    )
})