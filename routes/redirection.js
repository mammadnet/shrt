const urlModel = require("./../models/url");
const redirect = require("./../controllers/redirect")


const express = require("express");


const router = express.Router();


router.get("/:urlCode", redirect)


module.exports = router;