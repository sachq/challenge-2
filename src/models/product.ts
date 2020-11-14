import { Product } from './product.interface';
import { PRODUCTS } from '../_data/products';

class ProductModel {
  private _products: Product[];

  constructor() {
    this._products = PRODUCTS;
  }

  /**
   * Get all Products
   * @returns Product[]
   */
  get products(): Product[] {
    return this._products;
  }

  /**
   * Get Product by `id`
   * @param id Unique ID of the Product
   */
  getProduct = (id: number): Product | null => this._products.find(p => p.id === id) || null;

}

const productModel = new ProductModel();

export { productModel };
