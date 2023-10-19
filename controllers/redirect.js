const urlModel = require("./../models/url")


async function redirect (req, res) {
    const urlCode = req.params.urlCode;

    const query = await urlModel.findOne({urlCode})
    const longUrl = query.longUrl;

    res.redirect(302 ,"https:/" + longUrl)
}


module.exports = redirect;