const express = require("express");
const router = express.Router();
const Contact = require("../model/contact");

router.get("/", async (req, res) => {
  try {
    const contact = await Contact.find();
    res.json(contact);
  } catch (err) {
    console.log(err, "err");
    res.send("Error");
  }
});

router.post("/", async (req, res) => {
  const contactName = new Contact({
    name: req.body.name,
    number: req.body.number,
  });
  try {
    const contactPost = await contactName.save();
    res.json(contactPost)
  } catch (err) {
    res.send("could not add")
  }
});

module.exports = router;
