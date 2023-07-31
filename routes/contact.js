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

router.delete("/", async (req, res) => {
  console.log(req.body._id);
  const obj_id = new ObjectId(req.body._id);

  try {
    const deletedContact = await Contact.deleteOne({ _id: obj_id });
    res.json(deletedContact);
  } catch (err) {
    res.send("Cannot Delete");
  }
});

router.patch("/", async (req, res) => {
  const { _id, userName, password } = req.body;
  try {
    const updatedContact = await Contact.updateOne(
      { _id },
      { $set: { userName, password } }
    );
    res.json(updatedContact);
  } catch (err) {
    res.send("could not update");
  }
});

module.exports = router;
