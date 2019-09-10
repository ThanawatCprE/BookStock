const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const user = require("./models/user")
const constants = require("./constant");

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await user.findOne({ where: { username: username } })
        if (result) {
            if (bcrypt.compareSync(password, result.password)) {
                res.json({ result: constants.kResultOk, message: JSON.stringify(result) })
            } else {
                res.json({ result: constants.kResultNotOk, message: "Invalid password" })
            }
        } else {
            res.json({ result: constants.kResultNotOk, message: "Invalid username" })
        }
    } catch (error) {
        res.json({ result: constants.kResultNotOk, message: JSON.stringify(error) })
    }
})
router.post("/register", async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        const result = await user.create(req.body)
        res.json({ result: constants.kResultOk, message: JSON.stringify(result) })
    } catch (error) {
        res.json({ result: constants.kResultNotOk, message: JSON.stringify(error) })
    }
})
// Query all users
router.get("/users", async (req, res) => {
    let result = await user.findAll();
    res.json(result);
});

module.exports = router;