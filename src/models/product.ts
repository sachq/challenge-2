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
   * Update an existing Product in
   * Products table/array
   * @param id Product id
   * @param product Product to be updated
   */
  updateProduct(id: number, product: Product): Product|null {
    const productIndex = this._products.findIndex(p => p.id === id);

    // Return null if requested id cannot be found.
    if (productIndex < 0) return null;

    const productKeys = Object.keys(this._products[productIndex]);

    // Loop through the Keys of user provided key-value pairs
    for (const key of Object.keys(product)) {
      // Update only if field exist
      if (product[key] && productKeys.indexOf(key) >= 0) {
        this._products[productIndex][key] = product[key];
      }
    }
    return this._products[productIndex];
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
