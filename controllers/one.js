const router = require("express").Router()
router.get("/one", (req, res) => {
    console.log(req.params)
    res.send("<h1> Hello from page one</h1>")
})
module.exports = router