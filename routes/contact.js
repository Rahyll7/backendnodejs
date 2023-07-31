const express = require("express");
const router = express.Router();
const Contact = require("../model/contact");
const { ObjectId } = require("mongodb");

router.get("/:id", async (req, res) => {
  const objId = new ObjectId(req.params.id);
  console.log(objId);

  try {
    const contact = await Contact.findById(objId);
    res.json(contact);
  } catch (err) {
    res.send("Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const contact = await Contact.find();
    res.json(contact);
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});

router.post("/", async (req, res) => {
  const contactName = new Contact({
    userName: req.body.userName,
    password: req.body.password,
  });
  try {
    const contactPost = await contactName.save();
    res.json(contactPost);
  } catch (err) {
    res.send("could not add");
  }
});



module.exports = router;
