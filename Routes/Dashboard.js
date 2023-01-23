// Express
const express = require("express");
const Authenticate = require("../Middleware/Auth");
const router = express.Router();
const CookieParser = require("cookie-parser");
router.use(CookieParser());

router.get("/", Authenticate, (req, res) => {
    console.log(req.user);
    res.send("Hello World");
});

module.exports = router;
    