const express = require("express")




const app = express();
app.use(express.json());
const urlRouter = require("./routes/url");

app.use("/api/shortener/",urlRouter)






module.exports = app;