import Product from "../models/product.js"; // Assuming you have a Product model

// Controller to get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
  }
};

// Controller to get a product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err });
  }
};

// Controller to create a new product (Add this method)
export const createProduct = async (req, res) => {
  try {
    console.log(req.body); // Log the request body
    const { img, name, price, description, stock } = req.body;
    const newProduct = new Product({
      img,
      name,
      price,
      description,
      stock,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err); // Log the error
    res.status(400).json({ message: "Error creating product", error: err });
  }
};
