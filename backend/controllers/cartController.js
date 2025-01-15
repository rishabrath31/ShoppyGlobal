import Cart from "../models/cart.js";

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const cartItem = await Cart.create({ productId, quantity });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cartItem)
      return res.status(404).json({ message: "Cart item not found" });
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!cartItem)
      return res.status(404).json({ message: "Cart item not found" });
    res.status(200).json({ message: "Cart item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
