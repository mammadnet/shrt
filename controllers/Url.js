const urlModel = require("./../models/url");

const shortUniqueId = require("short-unique-id");
const uid = new shortUniqueId({ length: 10 });

const BASE_URL = "http://localhost:12345/";

async function getShortUrl(req, res) {
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

module.exports = { getShortUrl };
