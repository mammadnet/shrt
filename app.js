const express = require("express")




const app = express();
app.use(express.json());
const urlRouter = require("./routes/url");
const redirect = require("./routes/redirection")

app.use("/api/shortener/",urlRouter)

app.use("/", redirect)




module.exports = app;