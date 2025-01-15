import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    img: {
      type: String,
    },
    name: {
      type: String,
      required: true, // Required field
    },
    price: {
      type: Number,
      required: true, // Required field
    },
    description: {
      type: String,
      required: true, // Required field
    },
    stock: {
      type: Number,
      required: false, // Required field
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
