import Product from '../models/productModel.js';

// All products
export const allProductList = async (req, res) => {
    try {
      const productData = await Product.find({});
      if (productData) {
        res.status(200).json({ products: productData });
      } else {
        res.status(500).json({ message: "Something went wrong with finding product data" });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  