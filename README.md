# REST API

## Requirements

* NodeJs
* TypeScript


## Setup

**Install all necessary dependencies**
```
$ npm install
```

**Start the server (Development Environment only)**
```
$ npm run dev
```


## Usage

* ### CREATE
  Create a new Product

  **Request URL**
  ```
  POST /api/products/
  ```

  **Request Object (application/json)**
  ```
    {
      "id": 1,
      "name": "Transcof",
      "cost": 10.10,
      "currency": "Dollar",
      "appVersion": "0.49",
      "country": "United States"
    }
  ```

* ### READ
  Read all Products or get a Product by `id`

  **All Products**
  ```
  GET /api/products/
  ```

  **For a single Product**
  ```
  GET /api/products/:id
  ```

  **Request Object (application/json)**
  ```
    {
      "id": 1,
      "name": "Transcof",
      "cost": 10.10,
      "currency": "Dollar",
      "appVersion": "0.49",
      "country": "United States"
    }
  ```

* ### UPDATE
  Update a single Product, Provide only the necessary fields to update

  **All Products**
  ```
  PATCH /api/products/:id
  ```

  **For a single Product**
  ```
  GET /api/products/:id
  ```

  **Request JSON**
  ```
    {
      "name": "Transcof",
      "cost": 10.10,
      "currency": "Dollar",
      "appVersion": "0.49",
    }
  ```

* ### DELETE
  Delete a single Product

  ```
  DELETE /api/products/:id
  ```

  **Request JSON**
  ```
    {
      "name": "Transcof",
      "cost": 10.10,
      "currency": "Dollar",
      "appVersion": "0.49",
      "country": "United States"
    }
  ```