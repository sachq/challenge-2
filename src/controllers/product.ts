import { Request, Response } from 'express';

import { productModel } from '../models/product';
import { Product } from '../models/product.interface';

export class ProductController {
  /**
   * Create a new Product
   * Request Body must contain Product
   * @param req Request Object
   * @param res Response Object
   */
  public create(req: Request, res: Response): void {
    const product = productModel.createProduct(req.body);
    res.status(200)
      .json({
        description: 'New Product created',
        content: product
      })
  }

  /**
   * Get all Products or
   * by Product id, Request Parameter => `id`
   * @param req Request Object
   * @param res Response Object
   */
  public read(req: Request, res: Response): void {
    const result = (req.params.id) ? productModel.getProduct(+req.params.id)
                                   : productModel.products;
    res.status(result ? 200 : 404)
       .json({
         description: 'Success',
         content: result
        });
  }

  /**
   * Update a Product using `id`
   * Request Parameter => `id`
   * @param req Request Object
   * @param res Response Object
   */
  public update(req: Request, res: Response): void {
    const id = +req.params.id;
    const updatedProduct = productModel.updateProduct(
      id,
      req.body as Product
    );
    res.status(updatedProduct ? 200 : 404)
       .json({
         description: updatedProduct ? `Updated Product ${id}` : 'Resource not found',
         content: updatedProduct
       });
  }

  /**
   * Delete a Product using `id`
   * Request Parameter => `id`
   * @param req Request Object
   * @param res Response Object
   */
  public delete(req: Request, res: Response): void {
    const id = +req.params.id;
    const isDeleted = productModel.deleteProduct(id);
    res.status(isDeleted ? 200 : 404).json({
      description: isDeleted ? `Resource ${id} deleted` : 'Resource not found!',
      content: id
    })
  }
}

const productController = new ProductController();

export { productController };