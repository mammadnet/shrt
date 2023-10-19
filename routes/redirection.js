const urlModel = require("./../models/url");


const express = require("express");


const router = express.Router();


router.get("/:urlCode", async (req, res) => {
    const urlCode = req.params.urlCode;

    const query = await urlModel.findOne({urlCode})
    const longUrl = query.longUrl;

    res.redirect(302 ,"https:/" + longUrl)
})


module.exports = router;