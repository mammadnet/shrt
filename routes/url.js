const express = require("express");
const { models } = require("mongoose");

const urlController = require("./../controllers/Url");

const router = express.Router();



const urlModel = require("./../models/url")



router.get('/:shorturl', (req, res)=>{

    // TODO: fetch long url from DB and send shortid

    res.json(req.params)

})

router.post("/", urlController.getShortUrl)

module.exports = router;