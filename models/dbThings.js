const mongoose = require("mongoose");

const thingsSchema = new mongoose.Schema(
  {
    created_at: {
      type: Date,
      required: true,
    },
    entry_id: {
      type: Number,
      required: true,
    },
    field1: {
      type: String,
      required: true,
    },
    field2: {
      type: String,
      required: true,
    },
    field3: {
      type: String,
      required: true,
    },
    field4: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Things = mongoose.model("Things", thingsSchema);

module.exports = Things;