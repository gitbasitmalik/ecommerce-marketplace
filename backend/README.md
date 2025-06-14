# Ecommerce Marketplace Backend

## Overview
This is the backend for the Ecommerce Marketplace application. It is built using Node.js, Express, and MongoDB. The backend provides a RESTful API for managing products and users in the marketplace.

## Project Structure
```
backend
├── src
│   ├── controllers        # Contains business logic for handling requests
│   ├── models             # Contains Mongoose schemas and models
│   ├── routes             # Defines API routes
│   ├── utils              # Utility functions for the application
│   └── app.js             # Entry point of the application
├── package.json           # NPM configuration file
├── .env                   # Environment variables
└── README.md              # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

## Usage
To start the server, run:
```
npm start
```
The server will run on `http://localhost:5001`.

## API Endpoints
### Products
- **GET /products**: Retrieve a list of products.
- **POST /products**: Create a new product.
- **PUT /products/:id**: Update an existing product.
- **DELETE /products/:id**: Delete a product.

## Contributing
Feel free to submit issues or pull requests for any improvements or bug fixes.

## License
This project is licensed under the ISC License.