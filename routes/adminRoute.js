import express from "express"
import { addProduct } from "../controllers/adminController.js"
import upload from "../config/multer.js"


const adminRoute = express.Router()
adminRoute.post('/addProduct', upload.single('image'), addProduct);

export default adminRoute