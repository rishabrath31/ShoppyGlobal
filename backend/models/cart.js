import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },

});

export default mongoose.model("Cart", cartSchema);
