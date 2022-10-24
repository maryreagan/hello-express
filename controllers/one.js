const router = require("express").Router()
router.get("/one/:one", (req, res) => {
    res.send("<h1> Hello from page one</h1>")
})
module.exports = router