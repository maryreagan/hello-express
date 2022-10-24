const router = require("express").Router()
router.get("/three", (req, res) => {
    console.log(req.params)
    res.send("<h1>Hello from page three</h1>")
})
module.exports = router