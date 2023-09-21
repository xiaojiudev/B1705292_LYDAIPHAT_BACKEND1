const express = require("express")
const cors = require("cors")
const contactsRouter = require("./app/routes/contact.route")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/contacts", contactsRouter)

app.get("/", (req, res) => {
    res.json({messages: "Welcome to contactbook application."})
})

module.exports = app