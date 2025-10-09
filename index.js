const express = require("express")
const app = express()
const port = 4000

const locationRoute = require("./routes/locationsRoute")
const charRoute = require("./routes/charRoute")
const bookRoute = require("./routes/bookRoute")

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

// Middleware
app.use((req,res,next) => {
console.log(`${req.method} on ${req.url}`)
next()
})

app.use((req,res,next) => {
    let date = new Date()
    console.log("Requested on: " + date)
    next()
}) 

app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

// Routes
app.use("/locations", locationRoute)
app.use("/characters", charRoute)
app.use("/books", bookRoute)

app.get("/", (req, res) => {
    res.render('home')
})
app.get("/form", (req, res) => {
res.render('submit_data')
})
app.listen(port, () => {
    console.log(
        "Started listening on port ", port
    )
})