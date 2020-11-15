# REST API Coding Test
 
 ## Requirements Checklist
  - [x] Should handle all basic CRUD functions.
  - [x] Should include some sort of data source, be it in-memory or a database.
    * **in-memory**
  - [x] Include the SQL statements you would use for each function if the data source were an MSSQL database, but again, a database is not required.
    * CREATE - `INSERT INTO products (name, cost, currency, app_version, country) VALUES ('Transcof', 10.10, 'Dollar', '0.49', 'United States')`
    * READ - `SELECT * FROM products` or `SELECT * FROM products WHERE id = 1`
    * UPDATE - `UPDATE products SET name = 'CanyonQuo Lux 2', app_version = '0.3.4' WHERE id = 1`
    * DELETE - `DELTE FROM products WHERE id = 1`
  - [x] Should include code comments as appropriate.
  - [x] Explain any app architecture/design choices you made.
    * I used the MVC (Model View Controller) design pattern:
      * The Model is responsible for doing all CRUD operations and handles all the business logic; All the data are stored in memory.
      * The Controller is responsible for invoking functions from models to do user-specific tasks.
      * Here there's no View in REST API as it is JSON response.

  - [x] Explain any weaknesses or possible bugs you see in your code.
    
    **Weaknesses**:
    * All data is stored in memory, which is not persistent. So, the amount of data that can be stored in memory is limited. At the same time, in-memory is better for storing user sessions.
    * User Authentication is not implemented, which means the data is public, and users can manipulate it without notice.
    * Not tested, which means it's an unstable codebase and very error-prone.

    **Possible bugs/Known Issues**:
    * Fields are not adequately validated upon creation and updation; Users can add new fields upon creation. 
    * Data duplication can because of the lack validation and checks.
    * Errors are not handled properly.
  
  - [x] Explain how this sample API could be improved, extended, modified, or maintained.
    * Code needs to be tested and must have atleast 70-80% code-coverage.
    * Implement SQL or NoSQL database.
    * Implement User Authentication with help of in-memory session storage or JWT (JSON Web Tokens)
      * I prefer JWT as the session is not stored on the server. JWT is sent through the request headers; JWTs payload will have all the user information, which I'd see as one downside as the size can be larger than the session cookie.
    * Implement Logging, as it gives an understanding of the state of the application.