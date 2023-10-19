const urlModel = require("./../models/url");

async function redirect(req, res) {
  const urlCode = req.params.urlCode;

  const query = await urlModel.findOne({ urlCode });

  if (!query) {
    return res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }

  const longUrl = query.longUrl;

  res.redirect(302, longUrl);
}

module.exports = redirect;
