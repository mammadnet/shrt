const express = require("express");
const { models } = require("mongoose");

const urlController = require("./../controllers/Url");

const router = express.Router();



const urlModel = require("./../models/url")

router.all('/', (req, res, next)=>{
    res.set("Content-Type", "application/json");
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Headers", "*")
    next();
})

router.get('/', (req, res)=>{

    // TODO: fetch long url from DB and send shortid

    res.json(req.params)

})

router.post("/", urlController.creatShortUrl)

module.exports = router;