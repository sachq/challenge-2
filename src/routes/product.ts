import express, { Request, Response } from 'express';
import { productController } from '../controllers/product';

export const router = express.Router({
    strict: true
});

// (C)reate new Product
router.post('/', (req: Request, res: Response) => {
  productController.create(req, res);
});

// (R)ead all Products
// or Get product by `id`
router.get('/', (req: Request, res: Response) => {
  productController.read(req, res);
});

// (U)pdate Product based on `id`
router.patch('/:id', (req: Request, res: Response) => {
  productController.update(req, res);
});

// (D)elete Product based on `id`
router.delete('/:id', (req: Request, res: Response) => {
  productController.delete(req, res);
});

export {
  router as productRouter
};