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
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    cofirmPassword:req.body.cofirmPassword
  });
  try {
    const contactPost = await contactName.save();
    res.json(contactPost)
  } catch (err) {
    res.send("could not add")
  }
});

module.exports = router;
