const express = require("express")
const app = express()
const port = 4000

const locationRoute = require("./routes/locationsRoute")
const charRoute = require("./routes/charRoute")
const novelsRoute = require("./routes/novelsRoute")

app.use(express.urlencoded({ extended: true }))

// Middleware
const logger = app.use((req,res,next) => {
console.log(`${req.method} on ${req.url}`)
next()
})

// Routes
app.use("/locations", locationRoute)
app.use("/characters", charRoute)
app.use("/novels", novelsRoute)


app.listen(port, () => {
    console.log(
        "Started listening on port ", port
    )
})