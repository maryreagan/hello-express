const router = require("express").Router()
router.get("/three/:three", (req, res) => {
    res.send("<h1>Hello from page three</h1>")
})
module.exports = router