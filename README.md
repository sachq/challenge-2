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

API to do basic CRUD Operations:
* [CREATE](#create)
* [READ](#read)
* [UPDATE](#update)
* [DELETE](#delete)

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
  **Response**
  ```
    {
    "description": "New Product created",
    "content": {
        "name": "Quo Lux 2",
        "cost": 992.52,
        "currency": "Dollar",
        "appVersion": "23.2.3",
        "country": "United States",
        "id": 11
      }
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
  **Response**
  ```
    [
      {
        "description": "New Product created",
        "content": {
          "name": "Quo Lux 2",
          "cost": 992.52,
          "currency": "Dollar",
          "appVersion": "23.2.3",
          "country": "United States",
          "id": 11
        }
      },
      ...
    ]
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
  **Response**
  ```
    {
      "description": "Updated Product 1",
      "content": {
        "id": 1,
        "name": "Quo Lux 2",
        "cost": 10.1,
        "currency": "Dollar",
        "appVersion": "0.3.4",
        "country": "United States"
      }
    }
  ```

* ### DELETE
  Delete a single Product

  ```
  DELETE /api/products/:id
  ```
  **Response JSON**
  ```
    {
      "description": "Resource 2 deleted",
      "content": {
        "id": 2
      }
    }
  ```