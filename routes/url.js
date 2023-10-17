const express = require("express");

const router = express.Router();



router.get('/:shorturl', (req, res)=>{

    // TODO: fetch long url from DB and send shortid

    res.json(req.params)

})

router.post("/", (req, res)=>{

    // TODO: get long url from body and response shorturl 
})

module.exports = router;