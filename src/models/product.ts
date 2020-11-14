import { Product } from './product.interface';

class ProductModel {
  public products: Product[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: "Transcof",
        cost: "10.10",
        currency: "Dollar",
        app_version: "0.49",
        country: "United States"
      },
      {
        id: 2,
        name: "Konklab",
        cost: "58.10",
        currency: "Dollar",
        app_version: "7.3",
        country: "United States"
      },
      {
        id: 3,
        name: "Cardify",
        cost: "11.48",
        currency: "Dollar",
        app_version: "9.8",
        country:" Canada"
      },
      {
        id: 4,
        name: "Temp",
        cost: "10.97",
        currency: "Dollar",
        app_version: "0.9.7",
        country: "United States"
      },
      {
        id: 5,
        name: "Stim",
        cost: "20.50",
        currency: "Dollar",
        app_version: "0.7.3",
        country:"United States"
      }
    ]
  }

}

const productModel = new ProductModel();

export { productModel };
