const Express = require("express")
const app = Express()

const one = require("./controllers/one")
const two = require("./controllers/two")
const three = require("./controllers/three")
const PORT = 4000

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

// app.get("/:home", (req, res) => {
//     res.send("Hello home")
// })
app.use(one)
app.use(two)
app.use(three)