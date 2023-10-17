require("dotenv").config();

const app = require("./app");
const mongoose = require("mongoose");

const DB = process.env.DATABASE.replaceAll(
  "<PASSWORD>",
  process.env.DATABASE_PASS
);
console.log(DB);

mongoose.connect(DB).then((con) => {
  console.log("connect to the DB");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server listen on port " + PORT);
});
