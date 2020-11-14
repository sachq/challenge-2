import { Product } from './product.interface';
import { PRODUCTS } from '../_data/products';

class ProductModel {
  private _products: Product[];

  constructor() {
    this._products = PRODUCTS;
  }

  /**
   * Fetch all Products from the
   * Products table/array.
   * @returns Product[]
   */
  get products(): Product[] {
    return this._products;
  }

  /**
   * Push a new Product to Products
   * table/array.
   * @param Product
   */
  createProduct(product: Product): Product {
    const lastKnownIndex = this._products[this._products.length - 1].id;
    product.id = lastKnownIndex + 1;
    this._products.push(product);
    return product;
  }

  /**
   * Fetch a Product from Products
   * table/array using Product `id`.
   * @param id Unique ID of the Product
   */
  getProduct = (id: number): Product | null => this._products.find(p => p.id === id) || null;

  /**
   * Remove Product from the table/array.
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
