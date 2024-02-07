/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

const express = require('express');
const app = express();
const port = 3000;

function requestLoggerMiddleware(req, res, next) {
    const timestamp = new Date().toISOString(); // Get the current timestamp in ISO format
    const httpMethod = req.method; // Get the HTTP method of the request

    // Log the timestamp and HTTP method
    console.log(`${timestamp} - ${httpMethod} request received`);

    next(); // Pass control to the next middleware function
}

// Use the requestLoggerMiddleware for all incoming requests
app.use(requestLoggerMiddleware);

// Example route to test the middleware
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
