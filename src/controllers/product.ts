import { Request, Response } from 'express';

import { productModel } from '../models/product';

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
    throw new Error("Method not implemented.");
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
      description: 'Deleted',
      content: isDeleted ? `Resource ${id} deleted` : 'Resource not found!'
    })
  }
}

const productController = new ProductController();

export { productController };