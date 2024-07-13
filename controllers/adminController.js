import Product from '../models/productModel.js';

export const addProduct = async (req, res) => {
  try {
    const { productName, price, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const image = req.file.path;

    const newProduct = await Product.create({
      name: productName,
      price,
      description,
      image,
    });

    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
