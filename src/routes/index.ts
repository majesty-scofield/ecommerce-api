import express from "express";
import {products} from "../app/Http/Controllers/ProductController";
import {orders} from "../app/Http/Controllers/OrderController";
import {ValidationMiddleware} from "../app/Http/Middleware/ValidationMiddleware";
import {createProductSchema, updateProductSchema} from "../app/Schema/ProductSchema";

const router = express.Router();

// Product routes
router.get('/products', products.index);
router.post('/products', ValidationMiddleware(createProductSchema), products.store);
router.get('/products/:id', products.show);
router.put('/products/:id', ValidationMiddleware(updateProductSchema), products.update);
router.delete('/products/:id', products.destroy);

// Order routes
router.get('/orders', orders.index);
router.post('/orders', orders.store);
router.get('/orders/:id', orders.show);
router.put('/orders/:id', orders.update);
router.delete('/orders/:id', orders.destroy);

export default router;