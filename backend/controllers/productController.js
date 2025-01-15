import Product from "../models/product.js"; // Assuming you have a Product model

// Controller to get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json(products); // Send response with products
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
  }
};

// Controller to get a product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Find product by ID
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product); // Send product as response
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err });
  }
};

// Controller to create a new product
export const createProduct = async (req, res) => {
  try {
    const { img, name, price, description, stock } = req.body; // Get data from request body
    const newProduct = new Product({
      img,
      name,
      price,
      description,
      stock, // Include stock if it's required by your schema
    });

    await newProduct.save(); // Save the new product to the database
    res.status(201).json(newProduct); // Send the created product as response
  } catch (err) {
    res.status(400).json({ message: "Error creating product", error: err });
  }
};

// Controller to update a product by ID
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get product ID from URL parameters
    const productData = req.body; // Get updated product data from request body

    // Find and update the product by ID
    const updatedProduct = await Product.findByIdAndUpdate(id, productData, {
      new: true, // Return the updated product
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct); // Send the updated product as response
  } catch (err) {
    res.status(500).json({ message: "Error updating product", error: err });
  }
};

// Controller to delete a product by ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get product ID from URL parameters

    // Find and delete the product by ID
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" }); // Send success message
  } catch (err) {
    res.status(500).json({ message: "Error deleting product", error: err });
  }
};
