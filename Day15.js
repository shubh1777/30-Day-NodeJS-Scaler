const express = require('express');
const app = express();
const port = 3000;
// Middleware to log request details
function loggingMiddleware(req, res, next) {
    // Getting the current timestamp
    const timestamp = new Date().toISOString();
    // Destructuring some properties from the request object
    const { method, url, headers, body } = req;
    // Logging the details
    console.log(`[${timestamp}] ${method} ${url}`);
    console.log('Headers:', headers);
    console.log('Body:', body);
    // Proceeding to the next middleware or route handler
    next();
}
// To parse JSON body
app.use(express.json());
// Applying the logging middleware
app.use(loggingMiddleware);
// Test route
app.post('/test', (req, res) => {
    res.send('This is a test route.');
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
