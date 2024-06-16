const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inverntoryType: {
      type: String,
      required: [true, "inventoryType is required"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "BloodGroup is required"],
      enum: ["A+", "A-", "AB+", "AB-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      required: [true, "blood quantity is requied"],
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: [true, "organisation is required"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: function () {
        return this.inverntoryType === "out";
      },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      require: function () {
        return this.inverntoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
