const urlModel = require("./../models/url");

const validUrl = require("valid-url")

const shortUniqueId = require("short-unique-id");
const uid = new shortUniqueId({ length: 10 });

const BASE_URL = process.env.BASE_URL;

async function creatShortUrl(req, res) {

  if(!validUrl.isUri(req.body.longUrl)){
    return res.status(400).json({
      status: 'fail',
      message:"Bad URL"
    })
  }

  let query = urlModel.findOne({ longUrl: req.body.longUrl });
  query.select("-__v -urlCode -_id");

  let url = await query;
  if (url) {
    return res.status(200).json({
      status: "success",
      data: url,
    });
  } else {
    const urlCode = uid.rnd();

    shortUrl = BASE_URL + urlCode;
    url = await urlModel.create({
      longUrl: req.body.longUrl,
      shortUrl,
      urlCode,
    });

    res.status(201).json({
      status: "success",
      data: {
        longUrl: req.body.longUrl,
        shortUrl,
        delay: url.delay,
      },
    });
  }
}

module.exports = { creatShortUrl };
