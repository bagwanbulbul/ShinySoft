const express = require('express');
var user = express.Router();
user.use(express.json())
const bodyParser = require("body-parser")

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

const {signup,
    login,
    edit_profile
} = require('../controller/user')
router.post("/signup",signup )
router.post("/login",login)
router.post("/updateOne",edit_profile)
module.exports = router