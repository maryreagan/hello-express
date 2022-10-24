const router = require("express").Router()
router.get("/two", (req, res) => {
    console.log(req.params)
    res.send("<h1> Hello from page two</h1>")
})
module.exports = router