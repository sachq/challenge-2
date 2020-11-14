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

  /**
   * Delete Product by `id`
   * @param id Unique ID of the Product
   */
  deleteProduct(id: number): boolean {
    const itemIndex = this._products.findIndex(p => p.id === id);
    if (itemIndex < 0) return false;
    this._products.splice(itemIndex, 1);
    return true;
  }
}

const productModel = new ProductModel();

export { productModel };
