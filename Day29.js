/**
 * Error handling middleware for Express applications.
 * @param {Object} err - The error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Callback to the next middleware function
 */
function errorHandler(err, req, res, next) {
    console.error(err.stack); // Log error stack for debugging
   
    const errorResponse = {
        success: false,
        message: "An error occurred during the request.",
    };

    if (err.status) {
        res.status(err.status);
        errorResponse.message = err.message;
    } else if (err instanceof TypeError) {
        res.status(400); // Bad Request for type errors
        errorResponse.message = "Invalid data type provided.";
    } else {
        res.status(500); // Internal Server Error for unhandled errors
    }

    res.json(errorResponse);
}

// Usage with an Express application
const express = require('express');
const app = express();
const port = 3000;

// Use the error handling middleware after all other middleware and routes
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
