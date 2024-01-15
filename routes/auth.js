const router = require("express").Router();
const User = require("./../models/user");
const bcrypt = require("bcrypt");

//register

router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        const user = await newUser.save();
        res.status(200).json(user);
        console.log("Successful")
        console.log(req.url)
        console.log(req.headers)
    } catch (err) {
        console.log(err)
    }
});


///login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send("User Not Found")
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;