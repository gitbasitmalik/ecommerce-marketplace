// filepath: /Users/basitmalik/Downloads/ecommerce-marketplace/backend/src/utils/index.js
export const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'An error occurred', error: error.message });
};

export const validateProductData = (data) => {
    const { name, price, description } = data;
    if (!name || !price || typeof price !== 'number') {
        return { valid: false, message: 'Invalid product data' };
    }
    return { valid: true };
};