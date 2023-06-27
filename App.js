const express = require("express");
require("dotenv").config();
const connectToMongoDB = require("./database/connectdb");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/route");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("hello world");
});

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
