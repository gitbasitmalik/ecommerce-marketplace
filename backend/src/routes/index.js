import { Router } from "express";
import { getProducts } from "../controllers/index.js";

const router = Router();

router.get("/products", getProducts);

export default router;
