import express from "express";
import { allProductList } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.get("/productList", allProductList);

export default userRoute;
