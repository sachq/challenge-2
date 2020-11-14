import { Request, Response } from 'express';

export class ProductController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public read(req: Request, res: Response): void {
    res.json({ message: 'GET /user request received' });
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