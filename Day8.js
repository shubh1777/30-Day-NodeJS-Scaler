/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 *  @param {Error} err - The error object
 * @param {Object} res - Express response object
 * @param {Function} next - Function to pass control to the next middleware
 */
function positiveIntegerHandler(req, res, next) {
    const number = parseInt(req.query.number);
    if (!Number.isInteger(number) || number <= 0) {
        // If "number" is not a positive integer, throw an error
        const err = new Error('The "number" parameter must be a positive integer.');
        err.status = 400; // Set a custom status code for the error
        next(err); // Pass the error to the next error handling middleware
    } else {
        // If "number" is a positive integer, return a success message
        res.send(`Success: Received positive integer ${number}.`);
    }
}
function errorHandler(err, req, res, next) {
    res.status(err.status || 500).send({
        error: {
            message: err.message || 'An unexpected error occurred.',
            status: err.status || 500,
        },
    });
}
const express = require('express');
const app = express();
const port = 3000;
// Define the route using the positiveIntegerHandler
app.get( positiveIntegerHandler);
// Use the error handling middleware
app.use(errorHandler);
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
