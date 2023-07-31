const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://rahildb:MTnWxvW5qNoAQGg6@cluster0.dksldog.mongodb.net/";

const app = express();
const cors = require("cors");

try {
  mongoose
    .connect(url, {
      ssl: true,
    })

    .then(() => {
      console.log("db is connected");
    })

    .catch((error) => {
      console.log("db is not connected ", error);
    });
} catch (error) {
  console.log(error);
}

app.use(cors());
app.use(express.json())

const contactRouter = require("./routes/contact");
app.use("/contact", contactRouter);

app.listen(9000, () => {
  console.log("sever started");
});
