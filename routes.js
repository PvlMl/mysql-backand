import express from "express";

import { showProducts } from "./product.js";

const router = express.Router();

router.get('/', showProducts);

export default router;