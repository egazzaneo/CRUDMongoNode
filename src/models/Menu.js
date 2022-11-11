const { Schema, model } = require("mongoose");

const MenuSchema = new Schema(
  {
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Menu", MenuSchema);
