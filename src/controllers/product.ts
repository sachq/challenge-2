import { Request, Response } from 'express';

import { productModel } from '../models/product';
import { Product } from '../models/product.interface';

export class ProductController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public read(req: Request, res: Response): void {
    const result = (req.params.id) ? productModel.getProduct(+req.params.id)
                                   : productModel.products;
    res.status(result ? 200 : 404)
       .json({
         content: result
        });
  }

  public update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}

const productController = new ProductController();

export { productController };