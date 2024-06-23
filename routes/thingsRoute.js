const express = require("express");
const router = express.Router();
const Things = require("../models/dbThings");

router.get("/getThings", async (req, res) => {
  try {
    const data = await Things.find({}).sort({ createdAt: -1 });
    console.log("Berhasil mengambil data dari thingspeak");
    res.status(200).json(data);
  } catch (err) {
    console.log("Gagal mengambil data dari thingspeak:", err);
    res.status(500).json({ message: "Gagal mengambil data dari thingspeak" });
  }
});

module.exports = router;