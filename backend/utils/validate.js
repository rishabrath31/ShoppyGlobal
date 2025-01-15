import Product from '../models/Product.js';
import Cart from '../models/Cart.js';

// Check if the product exists
export const validateProductExists = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error('Product not found');
  }
};

// Check if the cart item exists
export const validateCartItemExists = async (cartItemId, userId) => {
  const cartItem = await Cart.findOne({ _id: cartItemId, userId });
  if (!cartItem) {
    throw new Error('Cart item not found');
  }
};
