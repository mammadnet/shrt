const express = require("express")




const app = express();
const urlRouter = require("./routes/url");

app.use("/api/shortener/",urlRouter)






module.exports = app;